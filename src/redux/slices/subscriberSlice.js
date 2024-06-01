import { createSlice } from "@reduxjs/toolkit";

export const subscriberSlice = createSlice({
  name: "subscriber",
  initialState: {
    subscribers: [],
  },
  reducers: {
    addSubscribers: (state, action) => {
      state.subscribers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSubscribers } = subscriberSlice.actions;

export default subscriberSlice.reducer;
