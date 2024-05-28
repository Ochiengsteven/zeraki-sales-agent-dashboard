/* eslint-disable @typescript-eslint/no-explicit-any */
// apiSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for JSON server
const BASE_URL = "http://localhost:5000";

// Define async thunks for data fetching
export const fetchCollections = createAsyncThunk(
  "api/fetchCollections",
  async () => {
    const response = await axios.get(`${BASE_URL}/collections`);
    return response.data;
  }
);

export const fetchSignups = createAsyncThunk("api/fetchSignups", async () => {
  const response = await axios.get(`${BASE_URL}/signups`);
  return response.data;
});

export const fetchRevenue = createAsyncThunk("api/fetchRevenue", async () => {
  const response = await axios.get(`${BASE_URL}/revenue`);
  return response.data;
});

export const fetchBouncedCheques = createAsyncThunk(
  "api/fetchBouncedCheques",
  async () => {
    const response = await axios.get(`${BASE_URL}/bouncedCheques`);
    return response.data;
  }
);

export const fetchSchools = createAsyncThunk("api/fetchSchools", async () => {
  const response = await axios.get(`${BASE_URL}/schools`);
  return response.data;
});

export const fetchInvoices = createAsyncThunk("api/fetchInvoices", async () => {
  const response = await axios.get(`${BASE_URL}/invoices`);
  return response.data;
});

export const fetchCollectionsPerSchool = createAsyncThunk(
  "api/fetchCollectionsPerSchool",
  async (schoolId: number) => {
    const response = await axios.get(`${BASE_URL}/collectionsPerSchool`, {
      params: { schoolId },
    });
    return response.data;
  }
);

// types for the state
interface ApiState {
  collections: any[];
  signups: any[];
  revenue: any[];
  bouncedCheques: any[];
  schools: any[];
  invoices: any[];
  collectionsPerSchool: { [key: number]: any };
  loading: "idle" | "loading";
  error: string | null;
}

const initialState: ApiState = {
  collections: [],
  signups: [],
  revenue: [],
  bouncedCheques: [],
  schools: [],
  invoices: [],
  collectionsPerSchool: {},
  loading: "idle",
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchCollections.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = "idle";
          state.collections = action.payload;
        }
      )
      .addCase(fetchCollections.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message || "Failed to fetch collections";
      })
      .addCase(fetchSignups.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchSignups.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = "idle";
          state.signups = action.payload;
        }
      )
      .addCase(fetchSignups.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message || "Failed to fetch signups";
      })
      .addCase(fetchRevenue.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchRevenue.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = "idle";
          state.revenue = action.payload;
        }
      )
      .addCase(fetchRevenue.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message || "Failed to fetch revenue";
      })
      .addCase(fetchBouncedCheques.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchBouncedCheques.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = "idle";
          state.bouncedCheques = action.payload;
        }
      )
      .addCase(fetchBouncedCheques.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message || "Failed to fetch bounced cheques";
      })
      .addCase(fetchSchools.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchSchools.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = "idle";
          state.schools = action.payload;
        }
      )
      .addCase(fetchSchools.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message || "Failed to fetch schools";
      })
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchInvoices.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = "idle";
          state.invoices = action.payload;
        }
      )
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message || "Failed to fetch invoices";
      })
      .addCase(fetchCollectionsPerSchool.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(
        fetchCollectionsPerSchool.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = "idle";
          state.collectionsPerSchool = action.payload;
        }
      )
      .addCase(fetchCollectionsPerSchool.rejected, (state, action) => {
        state.loading = "idle";
        state.error =
          action.error.message || "Failed to fetch collections per school";
      });
  },
});

// selector to calculate total collections amount
export const selectTotalCollections = (state: { api: ApiState }) => {
  return state.api.collections.reduce(
    (total, collection) => total + collection.amount,
    0
  );
};

// selector to get the total number of signups
export const selectTotalSignups = (state: { api: ApiState }) =>
  state.api.signups.length;

// selector to get the total revenue amount
export const selectTotalRevenue = (state: { api: ApiState }) => {
  return state.api.revenue.reduce(
    (total, revenue) => total + revenue.amount,
    0
  );
};

// selector to get the total number of bounced cheques
export const selectTotalBouncedCheques = (state: { api: ApiState }) =>
  state.api.bouncedCheques.length;

export default apiSlice.reducer;
