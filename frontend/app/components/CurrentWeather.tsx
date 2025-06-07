'use client';

import { WeatherData, TemperatureUnit } from '../types/weather';

interface CurrentWeatherProps {
  weather: WeatherData;
  unit: TemperatureUnit;
}

// Weather icon component
const WeatherIcon = ({ iconType }: { iconType: string }) => {
  if (iconType === 'partly-cloudy') {
    return (
      <div className="relative">
        {/* Sun */}
        <div className="w-20 h-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-800 rounded-full bg-transparent"></div>
          </div>
          {/* Sun rays */}
          <div className="absolute inset-0">
            <div className="absolute top-1 left-1/2 w-1 h-4 bg-gray-800 transform -translate-x-1/2 rotate-0"></div>
            <div className="absolute top-3 right-3 w-1 h-4 bg-gray-800 transform rotate-45"></div>
            <div className="absolute top-1/2 right-1 w-4 h-1 bg-gray-800 transform -translate-y-1/2 rotate-0"></div>
            <div className="absolute bottom-3 right-3 w-1 h-4 bg-gray-800 transform -rotate-45"></div>
            <div className="absolute bottom-1 left-1/2 w-1 h-4 bg-gray-800 transform -translate-x-1/2 rotate-0"></div>
            <div className="absolute bottom-3 left-3 w-1 h-4 bg-gray-800 transform rotate-45"></div>
            <div className="absolute top-1/2 left-1 w-4 h-1 bg-gray-800 transform -translate-y-1/2 rotate-0"></div>
            <div className="absolute top-3 left-3 w-1 h-4 bg-gray-800 transform -rotate-45"></div>
          </div>
        </div>
        {/* Cloud */}
        <div className="absolute bottom-0 right-0 w-12 h-8 bg-gray-800 rounded-full"></div>
        <div className="absolute bottom-1 right-2 w-8 h-6 bg-gray-800 rounded-full"></div>
        <div className="absolute bottom-2 right-4 w-6 h-4 bg-gray-800 rounded-full"></div>
      </div>
    );
  }
  return null;
};

export default function CurrentWeather({ weather, unit }: CurrentWeatherProps) {
  const convertTemperature = (temp: number) => {
    if (unit === 'F') {
      return Math.round((temp * 9/5) + 32);
    }
    return temp;
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-fit">
      {/* Weather Icon */}
      <div className="flex justify-center mb-6">
        <WeatherIcon iconType={weather.icon} />
      </div>
      
      {/* Temperature */}
      <div className="text-center mb-2">
        <span className="text-5xl font-light text-gray-800">
          {convertTemperature(weather.temperature)}°{unit}
        </span>
      </div>
      
      {/* Description */}
      <div className="text-center mb-8">
        <span className="text-xl text-gray-700 font-medium">
          {weather.description}
        </span>
      </div>
      
      {/* Date and Location */}
      <div className="text-center text-gray-600">
        <div className="text-sm leading-relaxed">
          <div>{weather.date}</div>
          <div>{weather.location}</div>
        </div>
      </div>
    </div>
  );
}