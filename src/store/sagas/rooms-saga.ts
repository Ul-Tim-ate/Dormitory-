import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { RoomResponse } from "../../models/response/room-response";
import { IRoom } from "../../models/room";
import RoomsService from "../../services/rooms-service";
import { RoomsAction } from "../../types/actions/rooms-action";
import { setDormitriesRoomsAction } from "../actions/rooms-actions";

function* getRoomsSaga({
  type,
  payload,
}: {
  type: string;
  payload: { domitoryId: number; page: number };
}) {
  const response: AxiosResponse<RoomResponse[]> = yield call(
    RoomsService.getRoomsDormitries,
    payload.domitoryId,
    payload.page
  );
  console.log(response);
  const roomArr = [] as IRoom[];
  response.data.forEach((el) => {
    const newRoom = {
      id: el.id,
      roomNumber: el.room_number,
      floor: el.floor,
      freePlaces: el.free_places,
      dormitory: Number.parseInt(el.dormitory),
    };
    roomArr.push(newRoom);
  });
  console.log(roomArr, "roomArr");
  put(setDormitriesRoomsAction(roomArr));
}

function* watchGetRoomsSaga() {
  yield takeLatest(RoomsAction.GET_ROOMS, getRoomsSaga);
}

export function* watchRoomsSaga() {
  yield all([watchGetRoomsSaga()]);
}
