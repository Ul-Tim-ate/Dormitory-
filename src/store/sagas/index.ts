import { watchAuthSaga } from "./auth-saga";
import { all } from "@redux-saga/core/effects";
import { watchDormitrySaga } from "./dormitry-saga";

export default function* rootSaga() {
  yield all([watchAuthSaga(), watchDormitrySaga()]);
}
