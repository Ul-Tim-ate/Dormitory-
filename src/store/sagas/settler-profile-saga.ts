import {
  takeEvery,
  all,
  call,
  put,
  takeLatest,
} from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { SettlerProfileResponse } from "../../models/response/settler-profile-response";
import SettlersService from "../../services/settler-service";
import { SettlerProfileActions } from "../../types/actions/settler-profile-actions";
import { setSettlerProfileAction } from "../actions/settler-profile-action";
import { setSettlersAction } from "../actions/settlers-actions";

function* getSetttlerProfileSaga({
  type,
  payload,
}: {
  type: string;
  payload: {
    dormitoryId: number;
    settlerId: number;
  };
}) {
  const response: AxiosResponse<SettlerProfileResponse> = yield call(
    SettlersService.geSettlerProfile,
    payload.dormitoryId,
    payload.settlerId
  );
  yield put(setSettlerProfileAction(response.data));
}

function* watchGetSettlerProfileSaga() {
  yield takeLatest(SettlerProfileActions.GET_SETTLER, getSetttlerProfileSaga);
}

export function* watchSettlerProfileSaga() {
  yield all([watchGetSettlerProfileSaga()]);
}
