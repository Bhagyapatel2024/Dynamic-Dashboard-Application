import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setDateRange, setSelectedRegion } from '../../store/slices/analyticsSlice';
import { createDateRangeFromMonths, serializeDateRange } from '../../utils/dateUtils';

export const Filters = () => {
  const dispatch = useDispatch();
  const { selectedRegion, usersByRegion } = useSelector(
    (state: RootState) => state.analytics
  );

  const handleDateRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const months = parseInt(event.target.value);
    const dateRange = createDateRangeFromMonths(months);
    dispatch(setDateRange(serializeDateRange(dateRange)));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            onChange={handleDateRangeChange}
            defaultValue="6"
          >
            <option value="1">Last Month</option>
            <option value="3">Last 3 Months</option>
            <option value="6">Last 6 Months</option>
            <option value="12">Last Year</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={selectedRegion || ''}
            onChange={(e) => dispatch(setSelectedRegion(e.target.value || null))}
          >
            <option value="">All Regions</option>
            {usersByRegion.map((region) => (
              <option key={region.region} value={region.region}>
                {region.region}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};