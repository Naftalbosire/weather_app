'use client';

import { useState } from 'react';
import SearchBox from './components/SearchBox';
import CurrentWeather from './components/CurrentWeather';
import ForecastCard from './components/ForecastCard';
import WindStatus from './components/WindStatus';
import HumidityStatus from './components/HumidityStatus';
import TemperatureToggle from './components/TemperatureToggle';
import { WeatherData, ForecastData, TemperatureUnit } from './types/weather';

export default function Home() {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('C');
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);

  const mockCurrentWeather: WeatherData = {
    location: 'Nairobi',
    date: '20th May 2027',
    temperature: 13,
    description: 'Sunny',
    icon: 'partly-cloudy',
    windSpeed: 3,
    humidity: 80
  };

  const mockForecast: ForecastData[] = [
    { date: '21 May', temperature: { min: 11, max: 17 }, icon: 'sunny' },
    { date: '22 May', temperature: { min: 20, max: 26 }, icon: 'cloudy' },
    { date: '23 May', temperature: { min: 16, max: 20 }, icon: 'sunny' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-end mb-4">
          <TemperatureToggle
            unit={temperatureUnit}
            onToggle={setTemperatureUnit}
          />
        </div>

        <div className="grid grid-cols-12 gap-6 h-[600px]">
          {/* Left Column */}
          <div className="col-span-4 h-full flex flex-col justify-between">
            <CurrentWeather
              weather={mockCurrentWeather}
              unit={temperatureUnit}
            />
          </div>

          {/* Right Column */}
          <div className="col-span-8 flex flex-col gap-6">
            {/* Search Box */}
            <SearchBox onSearch={(city) => console.log('Search:', city)} />

            {/* 3-Day Forecast */}
            <div className="grid grid-cols-3 gap-4">
              {mockForecast.map((day, index) => (
                <ForecastCard
                  key={index}
                  forecast={day}
                  unit={temperatureUnit}
                />
              ))}
            </div>

            {/* Wind and Humidity Stats */}
            <div className="grid grid-cols-2 gap-4">
              <WindStatus windSpeed={mockCurrentWeather.windSpeed} />
              <HumidityStatus humidity={mockCurrentWeather.humidity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
