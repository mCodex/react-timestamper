'use client';

import { useState, useEffect, useCallback } from 'react';
import { useForm } from '@tanstack/react-form';
import { timestampSchema, type TimestampFormData } from './schemas/timestamp';
import { 
  formatTimestamp, 
  formatTimestampLocal, 
  getRelativeTime, 
  getCurrentTimestamp,
  getCurrentTimestampMs 
} from './utils/timestamp';

export const useTimestampController = () => {
  // Current timestamp state
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
  const [currentTimestampMs, setCurrentTimestampMs] = useState<number>(0);
  
  // Conversion results state
  const [convertedDate, setConvertedDate] = useState<string>('');
  const [convertedDateLocal, setConvertedDateLocal] = useState<string>('');
  const [relativeTime, setRelativeTime] = useState<string>('');
  
  // UI state
  const [copySuccess, setCopySuccess] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  // Update current timestamp every second
  useEffect(() => {
    setMounted(true);
    
    const updateTimestamp = () => {
      setCurrentTimestamp(getCurrentTimestamp());
      setCurrentTimestampMs(getCurrentTimestampMs());
    };

    updateTimestamp();
    const interval = setInterval(updateTimestamp, 1000);

    return () => clearInterval(interval);
  }, []);

  // Form setup with TanStack React Form
  const form = useForm({
    defaultValues: {
      timestamp: '',
    } as TimestampFormData,
    onSubmit: async ({ value }) => {
      try {
        // Validate with Zod
        const validated = timestampSchema.parse(value);
        const numTimestamp = Number(validated.timestamp);
        
        setConvertedDate(formatTimestamp(numTimestamp));
        setConvertedDateLocal(formatTimestampLocal(numTimestamp));
        setRelativeTime(getRelativeTime(numTimestamp));
      } catch (error) {
        console.error('Validation error:', error);
      }
    },
  });

  // Copy to clipboard functionality
  const copyToClipboard = useCallback(async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${type} copied!`);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  }, []);

  // Get formatted current dates
  const getCurrentFormattedDates = useCallback(() => {
    return {
      utc: formatTimestamp(currentTimestamp),
      local: formatTimestampLocal(currentTimestamp),
    };
  }, [currentTimestamp]);

  return {
    // State
    currentTimestamp,
    currentTimestampMs,
    convertedDate,
    convertedDateLocal,
    relativeTime,
    copySuccess,
    mounted,
    
    // Form
    form,
    
    // Actions
    copyToClipboard,
    getCurrentFormattedDates,
  };
};

export default useTimestampController;

// Public type for consumers that want to share a single controller instance
export type TimestampController = ReturnType<typeof useTimestampController>;