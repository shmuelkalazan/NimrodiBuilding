//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/roles.json"

interface Data{
    index:number
}


export const rolereducer = createSlice({
    name: "role",
    initialState: data[0],
    reducers: {
        setRole : (state: string, action: PayloadAction<Data>) => {
          state = data[action.payload.index];
        return state
      },
    },
});
