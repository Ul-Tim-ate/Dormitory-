import { watchAuthSaga } from "./auth-saga";
import { all } from "@redux-saga/core/effects";
import { watchDormitrySaga } from "./dormitry-saga";
import { watchSettlerSaga } from "./settlers-saga";
import { watchStudentsSaga } from "./students-saga";
import { watchSettlerProfileSaga } from "./settler-profile-saga";
import { watchRoomsSaga } from "./rooms-saga";
import { watchStudentProfileSaga } from "./student-profile-saga";

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
    watchDormitrySaga(),
    watchSettlerSaga(),
    watchStudentsSaga(),
    watchSettlerProfileSaga(),
    watchRoomsSaga(),
    watchStudentProfileSaga(),
  ]);
}
