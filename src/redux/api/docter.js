import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const docterApi = createApi({
    reducerPath: "doctorApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/docter`, credentials: "include" }),
    tagTypes: ["docter"],
    endpoints: (builder) => {
        return {
            getDoctersBySearch: builder.query({
                query: ({ specialization, location }) => {
                    const params = new URLSearchParams();
                    if (specialization) params.append('specialization', specialization);
                    if (location) params.append('location', location);
                    return {
                        url: `/get-all-docters?${params.toString()}`,
                        method: "GET"
                    };
                },
                providesTags: ["docter"]
            }),
        }
    }
})

export const {
    useGetDoctersBySearchQuery
} = docterApi
