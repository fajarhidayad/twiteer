import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: {
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
    username: string | null | undefined;
  } | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
