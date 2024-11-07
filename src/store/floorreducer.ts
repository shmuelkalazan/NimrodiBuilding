import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boolean } from "zod";
//FILL HERE 3.1
interface Index{
    index:number
}


export const floorAccess = createSlice({
    name: "floorAccess",
    initialState: [false,false,false ,false ,false],
    reducers: {
        changeAccess : (state: boolean[], action: PayloadAction<Index>) => {
          state[action.payload.index] = !state[action.payload.index];
        return state
      },
    },
});


