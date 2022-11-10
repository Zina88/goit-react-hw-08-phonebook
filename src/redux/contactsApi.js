import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6362918a66f75177ea33035e.mockapi.io/api",
  }),
  tagTypes: ["Contacts"],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),

    getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ["Contacts"],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: "/contacts",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),

    updateContact: builder.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: "PUT",
        body: fields,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
