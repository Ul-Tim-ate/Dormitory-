import {
  takeEvery,
  all,
  call,
  put,
  takeLatest,
} from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { IDormitry } from "../../models/dormitry";
import {
  DormitoriesResponse,
  Dormitory,
  DormitoryResponse,
} from "../../models/response/dormitry-response";
import DormitryService from "../../services/dormitry-service";
import { DormitryActionsTypes } from "../../types/dormity-action";
import {
  setAddedUserDormitoryAction,
  setUserDormitriesAction,
} from "../actions/dormitry-actions";

function* getUserDormtiesSaga() {
  try {
    const response: AxiosResponse<DormitoriesResponse> = yield call(
      DormitryService.getUserDormitries
    );
    const dormitories: IDormitry[] = [];
    Array.from(response.data.dormitories).forEach((element) => {
      const newElement: IDormitry = {
        id: element.id,
        address: element.address,
        floorsCount: element.floors_count,
        roomsCountOnFloor: element.rooms_on_floor_count,
        roomCountPlaces: element.rooms_on_floor_count,
        universityName: element.university_info,
        busyPlaces: element.busy_places,
      };
      dormitories.push(newElement);
    });
    yield put(setUserDormitriesAction(dormitories));
  } catch (error) {
    console.log(error);
  }
}

function* addUserDormitrySaga({
  type,
  payload,
}: {
  type: string;
  payload: Dormitory;
}) {
  try {
    const response: AxiosResponse<DormitoryResponse> = yield call(
      DormitryService.addUserDormitry,
      payload
    );
    const newDormitry = {
      id: response.data.dormitory.id,
      address: response.data.dormitory.address,
      floorsCount: response.data.dormitory.floors_count,
      roomsCountOnFloor: response.data.dormitory.rooms_on_floor_count,
      roomCountPlaces: response.data.dormitory.rooms_on_floor_count,
      universityName: response.data.dormitory.university_info,
      busyPlaces: response.data.dormitory.busy_places,
    };
    yield put(setAddedUserDormitoryAction(newDormitry));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetUserDormtiesSaga() {
  yield takeLatest(
    DormitryActionsTypes.GET_USER_DORMITRIES,
    getUserDormtiesSaga
  );
}

function* watchAddUserDormtySaga() {
  yield takeEvery(DormitryActionsTypes.ADD_USER_DORMITRY, addUserDormitrySaga);
}

export function* watchDormitrySaga() {
  yield all([watchGetUserDormtiesSaga(), watchAddUserDormtySaga()]);
}
