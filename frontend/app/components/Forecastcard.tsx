'use client';

import { ForecastData, TemperatureUnit } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData;
  unit: TemperatureUnit;
}

// Mini weather icons for forecast
const MiniWeatherIcon = ({ iconType }: { iconType: string }) => {
  if (iconType === 'sunny') {
    return (
      <div className="w-12 h-12 relative flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-800 rounded-full bg-transparent"></div>
        {/* Sun rays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-gray-800 transform -translate-x-1/2"></div>
          <div className="absolute top-1 right-1 w-0.5 h-2 bg-gray-800 transform rotate-45"></div>
          <div className="absolute top-1/2 right-0 w-2 h-0.5 bg-gray-800 transform -translate-y-1/2"></div>
          <div className="absolute bottom-1 right-1 w-0.5 h-2 bg-gray-800 transform -rotate-45"></div>
          <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-gray-800 transform -translate-x-1/2"></div>
          <div className="absolute bottom-1 left-1 w-0.5 h-2 bg-gray-800 transform rotate-45"></div>
          <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-gray-800 transform -translate-y-1/2"></div>
          <div className="absolute top-1 left-1 w-0.5 h-2 bg-gray-800 transform -rotate-45"></div>
        </div>
      </div>
    );
  } else if (iconType === 'cloudy') {
    return (
      <div className="w-12 h-12 relative flex items-center justify-center">
        <div className="w-8 h-5 bg-gray-800 rounded-full"></div>
        <div className="absolute top-1 left-1 w-6 h-4 bg-gray-800 rounded-full"></div>
        <div className="absolute top-2 left-3 w-4 h-3 bg-gray-800 rounded-full"></div>
      </div>
    );
  }
  return null;
};

export default function ForecastCard({ forecast, unit }: ForecastCardProps) {
  const convertTemperature = (temp: number) => {
    if (unit === 'F') {
      return Math.round((temp * 9/5) + 32);
    }
    return temp;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
      {/* Date */}
      <div className="text-sm text-gray-600 mb-4">
        {forecast.date}
      </div>
      
      {/* Weather Icon */}
      <div className="flex justify-center mb-4">
        <MiniWeatherIcon iconType={forecast.icon} />
      </div>
      
      {/* Temperature Range */}
      <div className="text-sm text-gray-700">
        {convertTemperature(forecast.temperature.min)}-{convertTemperature(forecast.temperature.max)}°{unit}
      </div>
    </div>
  );
}