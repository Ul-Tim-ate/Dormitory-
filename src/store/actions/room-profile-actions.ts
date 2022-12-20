import { RoomProfile } from "../../models/room-profile";
import { RoomProfileActions } from "../../types/actions/room-profile-action";

export const getRoomProfileAction = (
  dormitoryId: number,
  roomNumber: number
) => {
  return {
    type: RoomProfileActions.GET_ROOM_PROFILE,
    payload: { dormitoryId, roomNumber },
  };
};

export const setRoomProfileAction = (roomProfile: RoomProfile) => {
  return { type: RoomProfileActions.SET_ROOM_PROFILE, payload: roomProfile };
};

export const dumpRoomProfileAction = () => {
  return { type: RoomProfileActions.DUMP_ROOM_PROFILE };
};
