import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { fetchUsers } from './store/slices/usersSlice';
import { LoginPage } from './components/auth/LoginPage';
import { OverviewCards } from './components/dashboard/OverviewCards';
import { Charts } from './components/dashboard/Charts';
import { Filters } from './components/dashboard/Filters';
import { UserTable } from './components/users/UserTable';
import { SearchBar } from './components/users/SearchBar';
import { Pagination } from './components/users/Pagination';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUsers());
    }
  }, [dispatch, isAuthenticated]);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h1>
        
        <div className="space-y-8">
          <OverviewCards />
          <Filters />
          <Charts />
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
            <SearchBar />
            <UserTable />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;