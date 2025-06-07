'use client';

interface WindStatusProps {
  windSpeed: number;
}

export default function WindStatus({ windSpeed }: WindStatusProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="text-sm text-gray-600 mb-4">
        Wind Status
      </div>
      
      {/* Wind Speed */}
      <div className="text-3xl font-light text-gray-800 mb-4">
        {windSpeed} km/h
      </div>
      
      {/* Wind Direction Indicator */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <span className="text-xs text-gray-500 uppercase tracking-wide">
          WSW
        </span>
      </div>
    </div>
  );
}