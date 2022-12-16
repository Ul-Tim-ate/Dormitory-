import {
  AuthActionsTypes,
  LoginActionType,
  RegistActionType,
} from "../../types/auth-actions";
import {
  takeEvery,
  all,
  call,
  put,
  takeLatest,
} from "@redux-saga/core/effects";
import AuthService from "../../services/auth-service";
import { AuthResponse } from "../../models/response/auth-response";
import { AxiosResponse } from "axios";
import { authLoginSuccessAction } from "../actions/auth-actions";

function* loginSaga(action: LoginActionType) {
  try {
    const response: AxiosResponse<AuthResponse> = yield call(
      AuthService.login,
      action.payload.email,
      action.payload.password
    );
    localStorage.setItem("token", response.data.jwt.access);
    localStorage.setItem("refreshToken", response.data.jwt.refresh);
    yield put(authLoginSuccessAction(response.data.user));
  } catch (error) {
    console.log(error);
  }
}

function* logoutSaga() {
  localStorage.setItem("token", "");
  localStorage.setItem("refreshToken", "");
}

function* registSaga(action: RegistActionType) {
  try {
    const response: AxiosResponse<AuthResponse> = yield call(
      AuthService.registration,
      action.payload
    );
    localStorage.setItem("token", response.data.jwt.access);
    localStorage.setItem("refreshToken", response.data.jwt.refresh);
    yield put(authLoginSuccessAction(response.data.user));
  } catch (error) {
    console.log(error);
  }
}

function* getUserSaga() {
  try {
    const response: AxiosResponse<AuthResponse> = yield call(
      AuthService.getUser
    );
    yield put(authLoginSuccessAction(response.data.user));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetUserSaga() {
  yield takeLatest(AuthActionsTypes.GET_USER, getUserSaga);
}

function* watchLoginSaga() {
  yield takeEvery(AuthActionsTypes.LOGIN, loginSaga);
}

function* watchLogoutSaga() {
  yield takeEvery(AuthActionsTypes.LOGOUT, logoutSaga);
}

function* watchRegistSaga() {
  yield takeEvery(AuthActionsTypes.REGISTRATION, registSaga);
}

export function* watchAuthSaga() {
  yield all([
    watchLoginSaga(),
    watchLogoutSaga(),
    watchRegistSaga(),
    watchGetUserSaga(),
  ]);
}
