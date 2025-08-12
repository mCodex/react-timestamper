import { z } from 'zod';

export const timestampSchema = z.object({
  timestamp: z.string()
    .min(1, 'Timestamp is required')
    .refine((val) => {
      // Check if it's a valid number (timestamp can be string representation of number)
      const num = Number(val);

      if (isNaN(num)) return false;
      
      // Check if it's a reasonable timestamp (between 1970 and 2100)
      const minTimestamp = 0; // 1970-01-01
      const maxTimestamp = 4102444800; // 2100-01-01
      
      // Handle both seconds and milliseconds timestamps
      const timestampInSeconds = num > 1e12 ? Math.floor(num / 1000) : num;
      
      return timestampInSeconds >= minTimestamp && timestampInSeconds <= maxTimestamp;
    }, 'Please enter a valid timestamp')
});

export type TimestampFormData = z.infer<typeof timestampSchema>;
