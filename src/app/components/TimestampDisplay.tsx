"use client";

import { useState, useEffect } from "react";

export default function TimestampDisplay() {
  const [currentTimestamp, setCurrentTimestamp] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    // Only run on client side - no server-side timestamp needed
    const updateTimestamp = () => {
      const timestamp = Math.floor(Date.now() / 1000);
      setCurrentTimestamp(timestamp.toString());
      setCurrentDate(new Date().toLocaleString());
    };
    
    // Initial update
    updateTimestamp();
    
    // Update every second
    const interval = setInterval(updateTimestamp, 1000);
    return () => clearInterval(interval);
  }, []);

  // Show loading state until client-side hydration is complete
  if (!currentTimestamp) {
    return (
      <>
        <div className="font-mono text-2xl text-warning font-bold">
          <div className="skeleton h-8 w-32"></div>
        </div>
        <div className="text-sm text-base-content/60 font-mono">
          <div className="skeleton h-4 w-48 mt-2"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="font-mono text-2xl text-warning font-bold">
        {currentTimestamp}
      </div>
      <div className="text-sm text-base-content/60 font-mono">
        {currentDate}
      </div>
    </>
  );
}
