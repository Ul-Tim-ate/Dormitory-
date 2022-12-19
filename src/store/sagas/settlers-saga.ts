import { takeEvery, all, call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { SettlerResponse } from "../../models/response/settlers-response";
import { ISettler } from "../../models/settler";
import SettlersService from "../../services/settler-service";
import { SettlerActionsTypes } from "../../types/actions/settler-action";
import { deleteSettlerProfileAction } from "../actions/settler-profile-action";
import {
  fetchSettlersAction,
  setSettlersAction,
} from "../actions/settlers-actions";

function* fetchDormitorySettlersSaga({
  type,
  payload,
}: {
  type: string;
  payload: number;
}) {
  const response: AxiosResponse<SettlerResponse> = yield call(
    SettlersService.getDormitorySettlers,
    payload
  );
  console.log("fetchSettlers", response.data);

  yield put(setSettlersAction(response.data.settlers));
}

function* addSettlerToDormitorySaga({
  type,
  payload,
}: {
  type: string;
  payload: {
    settler: ISettler;
    dormitoryId: number;
  };
}) {
  const response: AxiosResponse<SettlerResponse> = yield call(
    SettlersService.addSettlerToDormitory,
    payload.settler,
    payload.dormitoryId
  );
  yield put(fetchSettlersAction(payload.dormitoryId));
}

function* settleSettlerToDormitorySaga({
  type,
  payload,
}: {
  type: string;
  payload: {
    dormitoryId: number;
    settlerId: number;
    roomNumber: number;
  };
}) {
  const response: AxiosResponse<SettlerResponse> = yield call(
    SettlersService.settleSettler,
    payload.dormitoryId,
    payload.settlerId,
    payload.roomNumber
  );
}

function* watchFetchDormitorySettlersSaga() {
  yield takeEvery(
    SettlerActionsTypes.FETCH_SETTLERS,
    fetchDormitorySettlersSaga
  );
}

function* watchAddSettlerSaga() {
  yield takeEvery(SettlerActionsTypes.ADD_SETTLERS, addSettlerToDormitorySaga);
}

function* watchSettleSettlerSaga() {
  yield takeEvery(
    SettlerActionsTypes.SETTLE_SETTLER,
    settleSettlerToDormitorySaga
  );
}

export function* watchSettlerSaga() {
  yield all([
    watchFetchDormitorySettlersSaga(),
    watchAddSettlerSaga(),
    watchSettleSettlerSaga(),
  ]);
}
