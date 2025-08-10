"use client";

import { TbClock, TbRefresh, TbX, TbCheck, TbBulb } from "react-icons/tb";
import useController from "./useController";

export default function Home() {
  const {
    inputTimestamp,
    currentTimestamp,
    convertedDate,
    error,
    handleConvert,
    setInputTimestamp
  } = useController();

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleConvert();
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TbRefresh className="text-2xl text-primary" />
                <h1 className="text-3xl font-bold">Timestamper</h1>
              </div>
              <p className="text-base-content/70">Converts timestamp into date</p>
            </div>

            {/* Current Timestamp Display */}
            <div className="card bg-base-200 mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-3">Current Timestamp</h2>
                <div className="flex items-center gap-3">
                  <TbClock className="text-xl text-primary" />
                  <span className="text-2xl font-mono font-bold text-primary">
                    {currentTimestamp}
                  </span>
                </div>
                <div className="text-sm text-base-content/70 mt-2">
                  {new Date().toLocaleString()}
                </div>
              </div>
            </div>

            {/* Converter Section */}
            <div className="space-y-4">
              <h2 className="card-title text-lg">Convert Timestamp</h2>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter timestamp</span>
                </label>
                <div className="join w-full">
                  <input
                    type="text"
                    placeholder="1754854149"
                    className="input input-bordered join-item flex-1"
                    value={inputTimestamp}
                    onChange={(e) => setInputTimestamp(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                  <button
                    className="btn btn-primary join-item"
                    onClick={handleConvert}
                  >
                    Convert
                  </button>
                </div>
              </div>

              {/* Error Display */}
              {error && (
                <div className="alert alert-error">
                  <TbX className="h-6 w-6" />
                  <span>{error}</span>
                </div>
              )}

              {/* Success Display */}
              {convertedDate && (
                <div className="alert alert-success">
                  <TbCheck className="h-6 w-6" />
                  <span className="font-mono">{convertedDate}</span>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="divider"></div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-base-content/60 mb-2">
                <TbBulb className="h-4 w-4" />
                <span>Tip: Supports both seconds and milliseconds timestamps</span>
              </div>
              <p className="text-sm text-base-content/60">Press Enter to convert or click the Convert button</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
