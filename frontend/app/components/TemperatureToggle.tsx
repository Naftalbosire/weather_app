'use client';

import { TemperatureUnit } from '../types/weather';

interface TemperatureToggleProps {
  unit: TemperatureUnit;
  onToggle: (unit: TemperatureUnit) => void;
}

export default function TemperatureToggle({ unit, onToggle }: TemperatureToggleProps) {
  return (
    <div className="flex bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => onToggle('C')}
        className={`px-4 py-3 text-sm font-medium transition-colors ${
          unit === 'C'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        °C
      </button>
      <button
        onClick={() => onToggle('F')}
        className={`px-4 py-3 text-sm font-medium transition-colors ${
          unit === 'F'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        °F
      </button>
    </div>
  );
}