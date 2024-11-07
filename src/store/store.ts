// FILL HERE 3.3

import { configureStore } from "@reduxjs/toolkit";
import { floorAccess } from "./floorreducer";
import { rolereducer } from "./rolereducer";
// import { claimsSlice, policiesSlice, treasureSlice } from "./slices";

export default configureStore({
  reducer: {
    floorAccess: floorAccess.reducer,
    rolereducer:rolereducer.reducer
  },
});

export const {
    changeAccess,
    setRole
} = {
    ...floorAccess.actions,
    ...rolereducer.actions
};