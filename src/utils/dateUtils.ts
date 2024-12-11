import { format, subMonths, parseISO } from 'date-fns';
import { DateRange, SerializedDateRange } from '../types';

export const serializeDateRange = (range: DateRange): SerializedDateRange => ({
  start: format(range.start, 'yyyy-MM-dd'),
  end: format(range.end, 'yyyy-MM-dd'),
});

export const deserializeDateRange = (range: SerializedDateRange): DateRange => ({
  start: parseISO(range.start),
  end: parseISO(range.end),
});

export const createDateRangeFromMonths = (months: number): DateRange => {
  const end = new Date();
  const start = subMonths(end, months);
  return { start, end };
};