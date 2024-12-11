import { subMonths, format } from 'date-fns';

const generateRegistrationTrend = () => {
  const trend = [];
  for (let i = 6; i >= 0; i--) {
    trend.push({
      date: format(subMonths(new Date(), i), 'MMM yyyy'),
      count: Math.floor(Math.random() * 100) + 50,
    });
  }
  return trend;
};

export const mockAnalyticsData = {
  totalUsers: 1250,
  activeUsers: 980,
  deletedUsers: 0,
  registrationTrend: generateRegistrationTrend(),
  usersByStatus: [
    { status: 'Active', count: 980 },
    { status: 'Inactive', count: 270 },
  ],
  usersByRegion: [
    { region: 'North America', count: 450 },
    { region: 'Europe', count: 350 },
    { region: 'Asia', count: 250 },
    { region: 'South America', count: 120 },
    { region: 'Africa', count: 80 },
  ],
};