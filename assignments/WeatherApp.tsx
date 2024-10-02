'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Cloud, Droplets, Search, Sun, Thermometer, Wind, Moon } from 'lucide-react'

// Mock weather data (replace with actual API call in a real application)
const mockWeatherData = {
  current: {
    temp: 22,
    humidity: 60,
    windSpeed: 5,
    chanceOfRain: 30, // Hardcoded percentage chance of rain
    description: 'Partly cloudy'
  },
  forecast: [
    { day: 'Mon', temp: 23, icon: 'sun' },
    { day: 'Tue', temp: 25, icon: 'sun' },
    { day: 'Wed', temp: 21, icon: 'cloud' },
    { day: 'Thu', temp: 20, icon: 'cloud' },
    { day: 'Fri', temp: 22, icon: 'sun' },
  ]
}

type TemperatureUnit = 'C' | 'F'

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [weather, setWeather] = useState(mockWeatherData)
  const [unit, setUnit] = useState<TemperatureUnit>('C')

  const handleSearch = () => {
    // In a real app, you would fetch weather data here
    console.log('Searching for:', city)
    // For now, we'll just use our mock data
    setWeather(mockWeatherData)
  }

  const convertTemp = (temp: number): number => {
    if (unit === 'F') {
      return Math.round((temp * 9) / 5 + 32)
    }
    return Math.round(temp)
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-teal-100 to-blue-200'} p-4 sm:p-8`}>
      <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-center text-teal-800">Weather Forecast</h1>
            <Button onClick={toggleTheme} className="bg-teal-600 hover:bg-teal-700">
              {darkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSearch} className="bg-teal-600 hover:bg-teal-700">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-teal-800">Current Weather</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-teal-800">°C</span>
              <Switch
                checked={unit === 'F'}
                onCheckedChange={() => setUnit(unit === 'C' ? 'F' : 'C')}
              />
              <span className="text-sm font-medium text-teal-800">°F</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center justify-between bg-teal-50 p-4 rounded-lg">
              <div>
                <p className="text-5xl font-bold text-teal-800">{convertTemp(weather.current.temp)}°{unit}</p>
                <p className="text-teal-600">{weather.current.description}</p>
              </div>
              <div className="flex items-center text-blue-800 mt-2">
                <Cloud className="mr-1 h-5 w-5" />
                <Droplets className="mr-2 h-5 w-5" />
                <span>Chance of Rain: {weather.current.chanceOfRain}%</span>
              </div>
              <Sun className="h-16 w-16 text-yellow-500" />
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center text-blue-800 mb-2">
                <Droplets className="mr-2 h-5 w-5" /> 
                <span>Humidity: {weather.current.humidity}%</span>
              </div>
              <div className="flex items-center text-blue-800">
                <Wind className="mr-2 h-5 w-5" /> 
                <span>Wind: {weather.current.windSpeed} m/s</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-teal-800 mb-4">5-Day Forecast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {weather.forecast.map((day, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="font-semibold text-teal-800">{day.day}</p>
                {day.icon === 'sun' ? 
                  <Sun className="mx-auto h-8 w-8 text-yellow-500 my-2" /> : 
                  <Cloud className="mx-auto h-8 w-8 text-gray-400 my-2" />
                }
                <p className="text-teal-600">{convertTemp(day.temp)}°{unit}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
