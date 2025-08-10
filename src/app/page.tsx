import { TbClock, TbRefresh } from "react-icons/tb";
import TimestampDisplay from "./components/TimestampDisplay";
import TimestampConverter from "./components/TimestampConverter";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-300">
      <div className="container mx-auto p-6">
        
        {/* Header - Static Server Component */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <TbRefresh className="text-3xl text-orange-500" />
            <h1 className="text-4xl font-bold text-base-content">Timestamper</h1>
          </div>
          <p className="text-base-content/70">Convert timestamps into dates</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          
          {/* Current Timestamp - Client Component for real-time updates */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-orange-500">
                <TbClock className="text-xl" />
                Current Timestamp
              </h2>
              <TimestampDisplay />
            </div>
          </div>

          {/* Converter - Client Component for interactivity */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-orange-500 mb-4">Convert Timestamp</h2>
              <TimestampConverter />
            </div>
          </div>
        </div>

        {/* Info - Static Server Component */}
        <div className="text-center mt-8">
          <div className="card bg-base-200 max-w-md mx-auto">
            <div className="card-body text-center">
              <p className="text-sm">
                Supports both seconds (10 digits) and milliseconds (13 digits) timestamps
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}