import { IRoom } from "../../models/room";
import { RoomsAction } from "../../types/actions/rooms-action";

export const getDormitriesRoomsAction = (page: number) => {
  return { type: RoomsAction.GET_ROOMS, payload: page };
};

export const setDormitriesRoomsAction = (rooms: IRoom[]) => {
  return {
    type: RoomsAction.SET_ROOMS,
    payload: rooms,
  };
};
