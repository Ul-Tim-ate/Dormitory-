import { watchAuthSaga } from "./auth-saga";
import { all } from "@redux-saga/core/effects";

export default function* rootSaga() {
  yield all([watchAuthSaga()]);
}
