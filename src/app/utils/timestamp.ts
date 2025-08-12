import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

export const formatTimestamp = (timestamp: number): string => {
  // Handle both seconds and milliseconds timestamps
  const ts = timestamp > 1e12 ? timestamp : timestamp * 1000;

  return dayjs(ts).format('YYYY-MM-DD HH:mm:ss UTC');
};

export const formatTimestampLocal = (timestamp: number): string => {
  // Handle both seconds and milliseconds timestamps
  const ts = timestamp > 1e12 ? timestamp : timestamp * 1000;

  return dayjs(ts).format('YYYY-MM-DD HH:mm:ss');
};

export const getRelativeTime = (timestamp: number): string => {
  // Handle both seconds and milliseconds timestamps
  const ts = timestamp > 1e12 ? timestamp : timestamp * 1000;

  return dayjs(ts).fromNow();
};

export const getCurrentTimestamp = (): number => {
  return Math.floor(Date.now() / 1000);
};

export const getCurrentTimestampMs = (): number => {
  return Date.now();
};
