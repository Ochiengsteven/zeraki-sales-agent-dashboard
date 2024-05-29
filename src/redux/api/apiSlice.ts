/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  unwrapResult,
} from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://server-pl68.onrender.com";

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
  async (schoolId: number = 0) => {
    if (schoolId === 0) {
      throw new Error("schoolId is required");
    }
    const response = await axios.get(`${BASE_URL}/collectionsPerSchool`, {
      params: { schoolId },
    });
    return response.data;
  }
);

interface Signup {
  id: number;
  product: SignupProduct;
  schoolId: number;
  date: string;
}

interface Revenue {
  id: number;
  product: RevenueProduct;
  amount: number;
}

interface School {
  id: number;
  name: string;
  type: "Primary" | "Secondary" | "IGCSE";
  county: string;
  registrationDate: string;
  contact: string;
  products: string[];
  balance: number;
}

interface ApiState {
  collections: any[];
  signups: Signup[];
  revenue: Revenue[];
  bouncedCheques: any[];
  schools: School[];
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
        (state, action: PayloadAction<Signup[]>) => {
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
        (state, action: PayloadAction<Revenue[]>) => {
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
        (state, action: PayloadAction<School[]>) => {
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
          console.log("Fetched invoices:", action.payload);
        }
      )
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message || "Failed to fetch invoices";
      })
      .addCase(fetchCollectionsPerSchool.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCollectionsPerSchool.fulfilled, (state, action) => {
        state.loading = "idle";
        const result = unwrapResult(action);
        const schoolId = action.meta.arg;
        state.collectionsPerSchool[schoolId] = result;
      })
      .addCase(fetchCollectionsPerSchool.rejected, (state, action) => {
        state.loading = "idle";
        state.error =
          action.error.message || "Failed to fetch collections per school";
      });
  },
});

// Total collections amount
export const selectTotalCollections = (state: { api: ApiState }) => {
  return state.api.collections.reduce(
    (total, collection) => total + collection.amount,
    0
  );
};

// Total number of signups
export const selectTotalSignups = (state: { api: ApiState }) =>
  state.api.signups.length;

interface SignupBreakdown {
  "Zeraki Analytics": number;
  "Zeraki Finance": number;
  "Zeraki Timetable": number;
}

type SignupProduct = keyof SignupBreakdown;

export const selectSignupsByProduct = (state: {
  api: { signups: Signup[] };
}): SignupBreakdown => {
  const breakdown: SignupBreakdown = {
    "Zeraki Analytics": 0,
    "Zeraki Finance": 0,
    "Zeraki Timetable": 0,
  };

  state.api.signups.forEach((signup) => {
    if (signup.product in breakdown) {
      breakdown[signup.product]++;
    }
  });

  return breakdown;
};

// Total revenue amount
export const selectTotalRevenue = (state: { api: ApiState }) => {
  return state.api.revenue.reduce(
    (total, revenue) => total + revenue.amount,
    0
  );
};

interface RevenueBreakdown {
  "Zeraki Analytics": number;
  "Zeraki Finance": number;
  "Zeraki Timetable": number;
}

type RevenueProduct = keyof RevenueBreakdown;

export const selectRevenueByProduct = (state: {
  api: { revenue: Revenue[] };
}): RevenueBreakdown => {
  const breakdown: RevenueBreakdown = {
    "Zeraki Analytics": 0,
    "Zeraki Finance": 0,
    "Zeraki Timetable": 0,
  };

  state.api.revenue.forEach((revenue) => {
    if (revenue.product in breakdown) {
      breakdown[revenue.product] += revenue.amount;
    }
  });

  return breakdown;
};

// Total number of bounced cheques
export const selectTotalBouncedCheques = (state: { api: ApiState }) =>
  state.api.bouncedCheques.length;

export const selectProductsBySchoolType = (state: { api: ApiState }) => {
  const { schools } = state.api;

  const result: {
    [key: string]: { Primary: number; Secondary: number; IGCSE: number };
  } = {
    "Zeraki Analytics": { Primary: 0, Secondary: 0, IGCSE: 0 },
    "Zeraki Finance": { Primary: 0, Secondary: 0, IGCSE: 0 },
    "Zeraki Timetable": { Primary: 0, Secondary: 0, IGCSE: 0 },
  };

  schools.forEach((school) => {
    school.products.forEach((product) => {
      if (product in result) {
        result[product][school.type]++;
      }
    });
  });

  return result;
};

export const selectInvoices = (state: { api: ApiState }) => state.api.invoices;
export const selectSchools = (state: { api: ApiState }) => state.api.schools;

export default apiSlice.reducer;
