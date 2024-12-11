import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
import { mockUsers } from '../../mock/userData';

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  searchTerm: string;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  currentPage: 1,
  searchTerm: '',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockUsers;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { setCurrentPage, setSearchTerm, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;