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
import { IStudent } from "../../models/student";
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
  getStudentProfileAction,
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
  const student = {
    ...response.data.student,
    room: Number.parseInt(response.data.student.room),
  };
  yield put(setStudentProfileAction(student));
}

function* changeStudentProfileSaga({
  type,
  payload,
}: {
  type: string;
  payload: {
    dormitoryId: number;
    student: IStudent;
  };
}) {
  const response: AxiosResponse<StudentProfileResponse> = yield call(
    StudentsService.changeStudentProfile,
    payload.dormitoryId,
    payload.student
  );
  yield put(dumpStudentProfileAction());
  yield put(getStudentProfileAction(payload.dormitoryId, payload.student.id));
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

function* watchChangeStudentProfileSaga() {
  yield takeLatest(
    StudentProfileActions.CHANGE_STUDENT,
    changeStudentProfileSaga
  );
}

function* watchDeleteStudentProfileSaga() {
  yield takeLatest(
    StudentProfileActions.DELETE_STUDENT,
    deleteStudentProfileSaga
  );
}

export function* watchStudentProfileSaga() {
  yield all([
    watchGetStudentProfileSaga(),
    watchDeleteStudentProfileSaga(),
    watchChangeStudentProfileSaga(),
  ]);
}
