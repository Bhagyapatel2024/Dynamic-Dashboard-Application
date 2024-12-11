import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store/slices/usersSlice';
import { RootState } from '../../store';
import { Search } from 'lucide-react';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.users.searchTerm);

  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
};