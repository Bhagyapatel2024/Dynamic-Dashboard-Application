import { store } from '../store';

export interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  region: string;
  registrationDate: string;
}

export interface AnalyticsState {
  totalUsers: number;
  activeUsers: number;
  deletedUsers: number;
  registrationTrend: RegistrationTrend[];
  usersByStatus: UsersByStatus[];
  usersByRegion: UsersByRegion[];
  selectedDateRange: SerializedDateRange;
  selectedRegion: string | null;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}

export interface AuthUser {
  email: string;
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationTrend {
  date: string;
  count: number;
}

export interface UsersByStatus {
  status: string;
  count: number;
}

export interface UsersByRegion {
  region: string;
  count: number;
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface SerializedDateRange {
  start: string;
  end: string;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;