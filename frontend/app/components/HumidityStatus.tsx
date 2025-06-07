'use client';

interface HumidityStatusProps {
  humidity: number;
}

export default function HumidityStatus({ humidity }: HumidityStatusProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="text-sm text-gray-600 mb-4">
        Humidity
      </div>
      
      {/* Humidity Percentage */}
      <div className="text-3xl font-light text-gray-800 mb-4">
        {humidity}%
      </div>
      
      {/* Humidity Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gray-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${humidity}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}