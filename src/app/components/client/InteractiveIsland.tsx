"use client";

import { TbClock } from 'react-icons/tb';
import TimestampDisplay from '../TimestampDisplay';
import TimestampConverter from '../TimestampConverter';
import { useTimestampController } from '../../useController';
import InstallPWAButton from './InstallPWAButton';
import ServiceWorkerUpdateToast from './ServiceWorkerUpdateToast';

export default function InteractiveIsland() {
  const controller = useTimestampController();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-1">
          <TbClock className="text-3xl text-orange-500" />
          <span className="text-3xl font-bold">Convert timestamps into dates</span>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <article className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-orange-500">Current Timestamp</h2>
            <TimestampDisplay controller={controller} />
          </div>
        </article>

        <article className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-orange-500">Convert Timestamp</h2>
            <TimestampConverter controller={controller} />
          </div>
        </article>
      </div>

      <div className="alert alert-info mt-8 max-w-xl mx-auto">
        <span>Supports both seconds (10 digits) and milliseconds (13 digits) timestamps</span>
      </div>

      {controller.copySuccess && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-success">
            <span>{controller.copySuccess}</span>
          </div>
        </div>
      )}

      <InstallPWAButton />
      <ServiceWorkerUpdateToast />
    </div>
  );
}
