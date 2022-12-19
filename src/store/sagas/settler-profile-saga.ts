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
import {
  dumpSettlerProfileAction,
  setSettlerProfileAction,
} from "../actions/settler-profile-action";
import { deleteSettlersAction } from "../actions/settlers-actions";

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
    SettlersService.getSettlerProfile,
    payload.dormitoryId,
    payload.settlerId
  );

  yield put(setSettlerProfileAction(response.data.settler));
}

function* deleteSetttlerProfileSaga({
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
    SettlersService.deleteSetttlerProfile,
    payload.dormitoryId,
    payload.settlerId
  );
  yield put(deleteSettlersAction(payload.settlerId));
  yield put(dumpSettlerProfileAction());
}

function* watchGetSettlerProfileSaga() {
  yield takeLatest(SettlerProfileActions.GET_SETTLER, getSetttlerProfileSaga);
}

function* watchDeleteSettlerProfileSaga() {
  yield takeLatest(
    SettlerProfileActions.DELETE_SETTLER,
    deleteSetttlerProfileSaga
  );
}

export function* watchSettlerProfileSaga() {
  yield all([watchGetSettlerProfileSaga(), watchDeleteSettlerProfileSaga()]);
}
