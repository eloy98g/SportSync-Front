import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Methods
import signUp from './methods/signUp';

// Types
import Location from '../../types/location/Location';
import User, { EMPTY_USER } from '../../types/user/User';
import signIn from './methods/signIn';

type UserState = {
  loading: boolean;
  error: string;
  location: Location | null;
  user: User;
};

const initialState: UserState = {
  user: EMPTY_USER,
  location: null,
  loading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: state => {
      state.user = EMPTY_USER;
    },
    setLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.error.message || 'Error desconocido';
      state.loading = false;
    });
    // Sign In
    builder.addCase(signIn.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.error = action.error.message || 'Error desconocido';
      state.loading = false;
    });
  },
});

export const { logOut, setLocation, setUser } = userSlice.actions;

export default userSlice.reducer;
