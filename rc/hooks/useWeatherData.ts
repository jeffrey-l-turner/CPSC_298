import { useState, useEffect } from 'react';

interface WeatherData {
  current: {
    temp: number;
    humidity: number;
    windSpeed: number;
    description: string;
  };
  forecast: Array<{ day: string; temp: number; icon: string }>;
}

export const useWeatherData = (city: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate an API call
        const response = await new Promise<WeatherData>((resolve) =>
          setTimeout(() => resolve({
            current: {
              temp: 22,
              humidity: 60,
              windSpeed: 5,
              description: 'Partly cloudy'
            },
            forecast: [
              { day: 'Mon', temp: 23, icon: 'sun' },
              { day: 'Tue', temp: 25, icon: 'sun' },
              { day: 'Wed', temp: 21, icon: 'cloud' },
              { day: 'Thu', temp: 20, icon: 'cloud' },
              { day: 'Fri', temp: 22, icon: 'sun' },
            ]
          }), 1000)
        );
        setWeather(response);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  return { weather, loading, error };
};
