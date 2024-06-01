import { configureStore } from "@reduxjs/toolkit";
import subscriberSlice from "./slices/subscriberSlice";
import addSubscriberSlice from "./slices/addSubscriberSlice";
import sendNewsletterSlice from "./slices/sendNewsletterSlice";
import { subscribersApi } from "./api/subscribersApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    subscriber: subscriberSlice,
    addSubscriber: addSubscriberSlice,
    sendNewsletter: sendNewsletterSlice,
    [subscribersApi.reducerPath]: subscribersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(subscribersApi.middleware),
});


setupListeners(store.dispatch);
