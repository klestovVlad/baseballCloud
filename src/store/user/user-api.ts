import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserAuthorization {
  email: string;
  password: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baseballcloud-back.herokuapp.com/api/v1/auth",
    prepareHeaders: (headers, { getState }) => {
      const token = "";

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    signIn: build.query({
      query: (userAuthorization: UserAuthorization) => ({
        url: "sign_in",
        method: "POST",
        body: userAuthorization,
      }),
    }),
    validateToken: build.mutation({
      query: () => ({
        url: "validate_token",
      }),
    }),
  }),
});

export const { useSignInQuery, useValidateTokenMutation } = userApi;
