import { IRoom } from "../../models/room";
import { IStudent } from "../../models/student";
import { RoomProfileActions } from "../../types/actions/room-profile-action";

const initialState = {
  room: {} as IRoom,
  students: [] as IStudent[],
  getInfo: false,
};

const roomProfileReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case RoomProfileActions.SET_ROOM_PROFILE:
      return {
        ...state,
        students: payload.students,
        room: payload.room,
        getInfo: true,
      };
    case RoomProfileActions.DUMP_ROOM_PROFILE:
      return {
        ...state,
        students: [],
        room: {},
        getInfo: false,
      };
    default:
      return state;
  }
};

export default roomProfileReducer;
