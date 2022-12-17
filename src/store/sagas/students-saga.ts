import {
  takeEvery,
  all,
  call,
  put,
  takeLatest,
} from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { StudentsResponse } from "../../models/response/students-response";
import { IStudent } from "../../models/student";
import StudentsService from "../../services/student-service";
import { StudentsActionsTypes } from "../../types/actions/students-action";
import { setStudentsAction } from "../actions/students-actions";

function* fetchDormitoryStudentsSaga({
  type,
  payload,
}: {
  type: string;
  payload: number;
}) {
  const response: AxiosResponse<StudentsResponse> = yield call(
    StudentsService.getDormitoryStudents,
    payload
  );
  yield put(setStudentsAction(response.data.students));
}

function* watchFetchDormitoryStudentsSaga() {
  yield takeEvery(
    StudentsActionsTypes.FETCH_STUDENTS,
    fetchDormitoryStudentsSaga
  );
}

export function* watchStudentsSaga() {
  yield all([watchFetchDormitoryStudentsSaga()]);
}
