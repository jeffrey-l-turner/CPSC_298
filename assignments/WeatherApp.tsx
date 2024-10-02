'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from "../rc/components/ui/input"
import { Button } from "../rc/components/ui/button"
import { Card, CardContent } from "../rc/components/ui/card"
import { Switch } from "../rc/components/ui/switch"
import { Sun, Moon } from 'lucide-react'
type WeatherData = {
  temperature: number;
  description: string;
  icon: string;
};

type TemperatureUnit = 'C' | 'F';


export default function WeatherApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('New York');
  const [unit, setUnit] = useState<TemperatureUnit>('C');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit === 'C' ? 'metric' : 'imperial'}&appid=YOUR_API_KEY`);
        const data = response.data;
        setWeatherData({
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [city, unit]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-4 sm:p-8`}>
      <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Theme Toggle</h1>
          <div className="flex justify-center items-center mb-6">
            <Button onClick={toggleTheme} className="bg-teal-600 hover:bg-teal-700">
              {darkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
          <div className="flex justify-center items-center mb-6">
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              className="mr-2"
            />
            <Switch
              checked={unit === 'C'}
              onCheckedChange={() => setUnit(unit === 'C' ? 'F' : 'C')}
              className="mr-2"
            />
            <span>{unit === 'C' ? 'Celsius' : 'Fahrenheit'}</span>
          </div>
          {weatherData && (
            <div className="text-center">
              <img src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="Weather icon" />
              <p className="text-xl">{weatherData.temperature}°{unit}</p>
              <p className="text-sm capitalize">{weatherData.description}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
