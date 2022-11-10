import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "redux/contactsApi";
import contactsSlice from "./contactSlice";

export const store = configureStore({
  reducer: {
    filter: contactsSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
