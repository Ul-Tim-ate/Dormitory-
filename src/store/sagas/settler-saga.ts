import { takeEvery, all, call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { SettlerResponse } from "../../models/response/settlers-response";
import SettlersService from "../../services/settler-service";
import { SettlerActionsTypes } from "../../types/settler-action";
import { setSettlersAction } from "../actions/settlers-actions";

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
  yield put(setSettlersAction(response.data.settlers));
}

function* watchFetchDormitorySettlersSaga() {
  yield takeEvery(
    SettlerActionsTypes.FETCH_SETTLERS,
    fetchDormitorySettlersSaga
  );
}

export function* watchSettlerSaga() {
  yield all([watchFetchDormitorySettlersSaga()]);
}
