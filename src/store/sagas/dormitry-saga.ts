import { takeEvery, all, call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { IDormitry } from "../../models/dormitry";
import { DormitryResponse } from "../../models/response/dormitry-response";
import DormitryService from "../../services/dormitry-service";
import { DormitryActionsTypes } from "../../types/dormity-action";
import { setUserDormitriesAction } from "../actions/dormitry-actions";

function* getUserDormtiesSaga() {
  try {
    const response: AxiosResponse<DormitryResponse> = yield call(
      DormitryService.getUserDormitries
    );
    const dormitories: IDormitry[] = [];
    Array.from(response.data.dormitories).forEach((element) => {
      const newElement: IDormitry = {
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

function* watchGetUserDormtiesSaga() {
  yield takeEvery(
    DormitryActionsTypes.GET_USER_DORMITRIES,
    getUserDormtiesSaga
  );
}

export function* watchDormitrySaga() {
  yield all([watchGetUserDormtiesSaga()]);
}
