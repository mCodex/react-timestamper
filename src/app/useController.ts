import { useState, useEffect } from "react";

const useController = () => {
      const [inputTimestamp, setInputTimestamp] = useState<string>("");

      const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
    
    
      const [convertedDate, setConvertedDate] = useState<string>("");
  const [error, setError] = useState<string>("");

    // Update current timestamp every second
      useEffect(() => {
        const updateTimestamp = () => {
          setCurrentTimestamp(Math.floor(Date.now() / 1000));
        };
        
        updateTimestamp();
        const interval = setInterval(updateTimestamp, 1000);
        
        return () => clearInterval(interval);
      }, []);
    
      const handleConvert = () => {
        setError("");
        setConvertedDate("");
        
        if (!inputTimestamp.trim()) {
          setError("Please enter a timestamp");
          return;
        }
    
        const timestamp = parseInt(inputTimestamp);
        
        if (isNaN(timestamp)) {
          setError("Please enter a valid timestamp");
          return;
        }
    
        try {
          // Handle both seconds and milliseconds timestamps
          const date = new Date(timestamp < 10000000000 ? timestamp * 1000 : timestamp);
          
          if (isNaN(date.getTime())) {
            setError("Invalid timestamp");
            return;
          }
          
          setConvertedDate(date.toLocaleString());
        } catch {
          setError("Error converting timestamp");
        }
      };

      return {
        inputTimestamp,
        currentTimestamp,
        convertedDate,
        error,
        handleConvert,
        setInputTimestamp
      }
}

export default useController;