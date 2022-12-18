import { IRoom } from "../../models/room";
import { RoomsAction } from "../../types/actions/rooms-action";

const initialState = {
  rooms: [] as IRoom[],
  getRooms: false,
};

const roomsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case RoomsAction.SET_ROOMS:
      return {
        ...state,
        rooms: payload,
        getRooms: true,
      };
    default:
      return state;
  }
};

export default roomsReducer;
