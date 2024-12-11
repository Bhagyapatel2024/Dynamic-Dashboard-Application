import React from 'react';
import { Users, UserCheck, UserMinus } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const OverviewCard = ({ title, value, icon: Icon }: { title: string; value: number; icon: React.ElementType }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold mt-2">{value.toLocaleString()}</p>
      </div>
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
  </div>
);

export const OverviewCards = () => {
  const { totalUsers, activeUsers, deletedUsers } = useSelector((state: RootState) => state.analytics);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <OverviewCard title="Total Users" value={totalUsers} icon={Users} />
      <OverviewCard title="Active Users" value={activeUsers} icon={UserCheck} />
      <OverviewCard title="Deleted Users" value={deletedUsers} icon={UserMinus} />
    </div>
  );
};