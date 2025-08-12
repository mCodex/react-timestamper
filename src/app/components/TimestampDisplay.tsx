'use client';

import CopyField from "./common/CopyField";
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
      <CopyField
        label="Unix Timestamp (seconds)"
        value={currentTimestamp}
        onCopy={() => copyToClipboard(currentTimestamp.toString(), 'Timestamp')}
        large
      />
      <CopyField
        label="Unix Timestamp (milliseconds)"
        value={currentTimestampMs}
        onCopy={() => copyToClipboard(currentTimestampMs.toString(), 'Timestamp (ms)')}
        large
      />
      <CopyField
        label="Current Date (UTC)"
        value={formattedDates.utc}
        onCopy={() => copyToClipboard(formattedDates.utc, 'Date (UTC)')}
      />
      <CopyField
        label="Current Date (Local)"
        value={formattedDates.local}
        onCopy={() => copyToClipboard(formattedDates.local, 'Date (Local)')}
      />
    </div>
  );
}
