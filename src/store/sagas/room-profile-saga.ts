import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { RoomProfileResponse } from "../../models/response/room-response";
import RoomsService from "../../services/rooms-service";
import StudentsService from "../../services/student-service";
import { RoomProfileActions } from "../../types/actions/room-profile-action";
import { setRoomProfileAction } from "../actions/room-profile-actions";
import { RoomProfile } from "../../models/room-profile";
import { StudentsResponse } from "../../models/response/students-response";

function* getRoomProfileSaga({
  type,
  payload,
}: {
  type: string;
  payload: {
    dormitoryId: number;
    roomNumber: number;
  };
}) {
  const roomResponse: AxiosResponse<RoomProfileResponse> = yield call(
    RoomsService.getRoom,
    payload.dormitoryId,
    payload.roomNumber
  );
  const studentsResponse: AxiosResponse<StudentsResponse> = yield call(
    StudentsService.getStudentsByRoom,
    payload.dormitoryId,
    payload.roomNumber
  );
  const roomInfo = {
    room: {
      floor: roomResponse.data.room.floor,
      freePlaces: roomResponse.data.room.free_places,
      id: roomResponse.data.room.id,
      places: roomResponse.data.room.places,
      roomNumber: roomResponse.data.room.room_number,
      dormitory: Number.parseInt(roomResponse.data.room.dormitory),
    },
    students: [...studentsResponse.data.students],
  };
  yield put(setRoomProfileAction(roomInfo));
}

function* watchGetRoomProfileSaga() {
  yield takeLatest(RoomProfileActions.GET_ROOM_PROFILE, getRoomProfileSaga);
}

export function* watchRoomsProfileSaga() {
  yield all([watchGetRoomProfileSaga()]);
}
