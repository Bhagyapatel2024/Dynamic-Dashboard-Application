import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticsState, SerializedDateRange } from '../../types';
import { mockAnalyticsData } from '../../mock/analyticsData';
import { serializeDateRange, createDateRangeFromMonths } from '../../utils/dateUtils';

const initialDateRange = createDateRangeFromMonths(6);

const initialState: AnalyticsState = {
  ...mockAnalyticsData,
  selectedDateRange: serializeDateRange(initialDateRange),
  selectedRegion: null,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<SerializedDateRange>) => {
      state.selectedDateRange = action.payload;
    },
    setSelectedRegion: (state, action: PayloadAction<string | null>) => {
      state.selectedRegion = action.payload;
    },
    incrementDeletedUsers: (state) => {
      state.deletedUsers += 1;
      state.totalUsers -= 1;
      state.usersByStatus = state.usersByStatus.map(status => ({
        ...status,
        count: status.status === 'Active' ? status.count - 1 : status.count
      }));
    },
  },
});

export const { setDateRange, setSelectedRegion, incrementDeletedUsers } = analyticsSlice.actions;
export default analyticsSlice.reducer;