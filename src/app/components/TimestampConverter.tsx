"use client";

import { useState } from "react";

export default function TimestampConverter() {
  const [inputTimestamp, setInputTimestamp] = useState("");
  const [convertedDate, setConvertedDate] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    if (!inputTimestamp.trim()) {
      setError("Please enter a timestamp");
      setConvertedDate("");
      return;
    }

    setError("");

    try {
      const timestamp = parseInt(inputTimestamp);
      
      if (isNaN(timestamp)) {
        throw new Error("Invalid timestamp format");
      }

      const date = timestamp.toString().length === 10 
        ? new Date(timestamp * 1000)
        : new Date(timestamp);

      if (isNaN(date.getTime())) {
        throw new Error("Invalid timestamp");
      }
      
      setConvertedDate(date.toLocaleString());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed");
      setConvertedDate("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleConvert();
    }
  };

  return (
    <div className="space-y-4">
      <div className="form-control">
        <input
          type="text"
          placeholder="1754854149"
          className="input input-bordered w-full"
          value={inputTimestamp}
          onChange={(e) => setInputTimestamp(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>

      <button
        className="btn btn-warning w-full"
        onClick={handleConvert}
      >
        Convert
      </button>

      {/* Results */}
      {error && (
        <div className="alert alert-error">
          <span>{error}</span>
        </div>
      )}

      {convertedDate && (
        <div className="alert alert-success">
          <div>
            <div className="font-bold">Converted Date:</div>
            <div className="font-mono text-lg">{convertedDate}</div>
          </div>
        </div>
      )}
    </div>
  );
}
