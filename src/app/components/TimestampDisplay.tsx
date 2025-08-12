'use client';

import { TbCopy } from "react-icons/tb";
import { useTimestampController, type TimestampController } from "../useController";

type Props = {
  controller?: TimestampController;
  showToast?: boolean; // kept for compatibility but not used here anymore
};

export default function TimestampDisplay({ controller }: Props) {
  const fallback = useTimestampController();

  const ctx = controller ?? fallback;
  
  const {
    currentTimestamp,
    currentTimestampMs,
    mounted,
    copyToClipboard,
    getCurrentFormattedDates,
  } = ctx;

  const formattedDates = getCurrentFormattedDates();

  if (!mounted) {
    return (
      <div className="space-y-4">
        <div className="skeleton h-12 w-full"></div>
        <div className="skeleton h-12 w-full"></div>
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-2/3"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Unix Timestamp (seconds) */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-orange-400">Unix Timestamp (seconds)</span>
        </label>
        <div className="input-group">
          <input 
            type="text" 
            className="input input-bordered flex-1 font-mono text-lg bg-base-200" 
            value={currentTimestamp}
            readOnly
          />
          <button 
            className="btn btn-square bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
            onClick={() => copyToClipboard(currentTimestamp.toString(), 'Timestamp')}
          >
            <TbCopy />
          </button>
        </div>
      </div>

      {/* Unix Timestamp (milliseconds) */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-orange-400">Unix Timestamp (milliseconds)</span>
        </label>
        <div className="input-group">
          <input 
            type="text" 
            className="input input-bordered flex-1 font-mono text-lg bg-base-200" 
            value={currentTimestampMs}
            readOnly
          />
          <button 
            className="btn btn-square bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
            onClick={() => copyToClipboard(currentTimestampMs.toString(), 'Timestamp (ms)')}
          >
            <TbCopy />
          </button>
        </div>
      </div>

      {/* Current Date (UTC) */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-orange-400">Current Date (UTC)</span>
        </label>
        <div className="input-group">
          <input 
            type="text" 
            className="input input-bordered flex-1 font-mono bg-base-200" 
            value={formattedDates.utc}
            readOnly
          />
          <button 
            className="btn btn-square bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
            onClick={() => copyToClipboard(formattedDates.utc, 'Date (UTC)')}
          >
            <TbCopy />
          </button>
        </div>
      </div>

      {/* Current Date (Local) */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-orange-400">Current Date (Local)</span>
        </label>
        <div className="input-group">
          <input 
            type="text" 
            className="input input-bordered flex-1 font-mono bg-base-200" 
            value={formattedDates.local}
            readOnly
          />
          <button 
            className="btn btn-square bg-orange-500 hover:bg-orange-600 border-orange-500 text-white"
            onClick={() => copyToClipboard(formattedDates.local, 'Date (Local)')}
          >
            <TbCopy />
          </button>
        </div>
      </div>

  {/* Toast rendering centralized in page */}
    </div>
  );
}
