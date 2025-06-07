export interface WeatherData {
  location: string;
  date: string;
  temperature: number;
  description: string;
  icon: string;
  windSpeed: number;
  humidity: number;
}

export interface ForecastData {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  icon: string;
}

export interface GeocodingResult {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export type TemperatureUnit = 'C' | 'F';