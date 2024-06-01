import { createSlice } from "@reduxjs/toolkit";

export const sendNewsletterSlice = createSlice({
  name: "sendNewsletter",
  initialState: {
    email: "",
    subject: "",
    fromEmail: "",
    fromName: "",
    file: null,
  },
  reducers: {
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addSubject: (state, action) => {
      state.subject = action.payload;
    },
    addFromEmail: (state, action) => {
      state.fromEmail = action.payload;
    },
    addFromName: (state, action) => {
      state.fromName = action.payload;
    },
    addFile: (state, action) => {
      state.file = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEmail, addSubject, addFromEmail, addFromName, addFile } =
  sendNewsletterSlice.actions;

export default sendNewsletterSlice.reducer;
