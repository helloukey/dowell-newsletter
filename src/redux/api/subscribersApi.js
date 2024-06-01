// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const subscribersApi = createApi({
  reducerPath: "subscribersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_NEWSLETTER_API,
    method: "POST",
  }),
  endpoints: (builder) => ({
    getSubscribersList: builder.query({
      query: (type) => `?type=${type}`,
    }),
    addSubscriber: builder.mutation({
      query: ({ type, data }) => ({
        url: `?type=${type}`,
        method: "POST",
        body: data,
        redirect: "follow",
      }),
    }),
    removeSubscriber: builder.mutation({
      query: ({ type, data }) => ({
        url: `?type=${type}`,
        method: "POST",
        body: data,
        redirect: "follow",
      }),
    }),
    sendNewsletter: builder.mutation({
      query: ({ type, data }) => ({
        url: `?type=${type}`,
        method: "POST",
        body: data,
        redirect: "follow",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetSubscribersListQuery,
  useAddSubscriberMutation,
  useRemoveSubscriberMutation,
  useSendNewsletterMutation,
} = subscribersApi;
