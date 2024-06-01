import { createSlice } from "@reduxjs/toolkit";

export const addSubscriberSlice = createSlice({
  name: "addSubscriber",
  initialState: {
    email: "",
    topic: "",
    type: "",
  },
  reducers: {
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addTopic: (state, action) => {
      state.topic = action.payload;
    },
    addType: (state, action) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmail, addTopic, addType } = addSubscriberSlice.actions;

export default addSubscriberSlice.reducer;
