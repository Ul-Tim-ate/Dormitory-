import { watchAuthSaga } from "./auth-saga";
import { all } from "@redux-saga/core/effects";
import { watchDormitrySaga } from "./dormitry-saga";
import { watchSettlerSaga } from "./settler-saga";
import { watchStudentsSaga } from "./students-saga";

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
    watchDormitrySaga(),
    watchSettlerSaga(),
    watchStudentsSaga(),
  ]);
}
