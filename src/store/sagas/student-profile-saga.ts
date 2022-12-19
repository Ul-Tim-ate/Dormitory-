import {
  takeEvery,
  all,
  call,
  put,
  takeLatest,
} from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { SettlerProfileResponse } from "../../models/response/settler-profile-response";
import { StudentProfileResponse } from "../../models/response/students-response";
import SettlersService from "../../services/settler-service";
import StudentsService from "../../services/student-service";
import { SettlerProfileActions } from "../../types/actions/settler-profile-actions";
import { StudentProfileActions } from "../../types/actions/student-profile-action";
import {
  dumpSettlerProfileAction,
  setSettlerProfileAction,
} from "../actions/settler-profile-action";
import {
  dumpStudentProfileAction,
  setStudentProfileAction,
} from "../actions/student-profile.-actions";

function* getStudentProfileSaga({
  type,
  payload,
}: {
  type: string;
  payload: {
    dormitoryId: number;
    studentId: number;
  };
}) {
  const response: AxiosResponse<StudentProfileResponse> = yield call(
    StudentsService.getStudentProfile,
    payload.dormitoryId,
    payload.studentId
  );
  yield put(setStudentProfileAction(response.data.student));
}

function* deleteStudentProfileSaga({
  type,
  payload,
}: {
  type: string;
  payload: {
    dormitoryId: number;
    studentId: number;
  };
}) {
  const response: AxiosResponse<StudentProfileResponse> = yield call(
    StudentsService.deleteStudentProfile,
    payload.dormitoryId,
    payload.studentId
  );
  yield put(dumpStudentProfileAction());
}

function* watchGetStudentProfileSaga() {
  yield takeLatest(StudentProfileActions.GET_STUDENT, getStudentProfileSaga);
}

function* watchDeleteStudentProfileSaga() {
  yield takeLatest(
    StudentProfileActions.DELETE_STUDENT,
    deleteStudentProfileSaga
  );
}

export function* watchStudentProfileSaga() {
  yield all([watchGetStudentProfileSaga(), watchDeleteStudentProfileSaga()]);
}
