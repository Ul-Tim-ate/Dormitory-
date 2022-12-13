import { AuthActionsTypes, LoginActionType } from "../../types/auth-actions";
import { takeEvery, all, call } from "@redux-saga/core/effects";
import AuthService from "../../services/auth-service";
import { AuthResponse } from "../../models/response/auth-response";
import { AxiosResponse } from "axios";

function* loginSaga(action: LoginActionType) {
  try {
    const response: AxiosResponse<AuthResponse> = yield call(
      AuthService.login,
      action.payload.email,
      action.payload.password
    );
    localStorage.setItem("token", response.data.jwt.access);
  } catch (error) {
    console.log(error);
  }
}

function* watchLoginSaga() {
  yield takeEvery(AuthActionsTypes.LOGIN, loginSaga);
}

export function* watchAuthSaga() {
  yield all([watchLoginSaga()]);
}
