'use client'

import React from 'react'
import { useState } from 'react';
import { useWeatherData } from '../rc/hooks/useWeatherData';
import { Input } from "../rc/components/ui/input"
import { Button } from "../rc/components/ui/button"
import { Card, CardContent } from "../rc/components/ui/card"
import { Switch } from "../rc/components/ui/switch"
import { Cloud, Droplets, Search, Sun, Thermometer, Wind } from 'lucide-react'
type TemperatureUnit = 'C' | 'F'

const useWeatherData = (city: string) => {
  const [weather, setWeather] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (city) {
      setLoading(true)
      setError(null)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`)
        .then(response => {
          if (!response.ok) {
            throw new Error('City not found')
          }
          return response.json()
        })
        .then(data => {
          setWeather({
            current: {
              temp: data.main.temp,
              humidity: data.main.humidity,
              windSpeed: data.wind.speed,
              description: data.weather[0].description
            },
            forecast: [] // You can add forecast data here if needed
          })
          setLoading(false)
        })
        .catch(err => {
          setError(err.message)
          setLoading(false)
        })
    }
  }, [city])

  return { weather, loading, error }
}

export default function WeatherApp() {
  const [city, setCity] = useState('')
  const { weather, loading, error } = useWeatherData(city)
  const [unit, setUnit] = useState<TemperatureUnit>('C')

  const convertTemp = (temp: number): number => {
    if (unit === 'F') {
      return Math.round((temp * 9) / 5 + 32)
    }
    return Math.round(temp)
    if (city.trim() === '') {
      alert('Please enter a city name')
    } else {
      setCity(city.trim());
    }
  }
  }

  const handleSearch = () => {
    if (city.trim() === '') {
      alert('Please enter a city name')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-200 p-4 sm:p-8">
      <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center text-teal-800 mb-6">Weather Forecast</h1>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {loading && <p className="text-center mb-4">Loading...</p>}
          <div className={`flex flex-col sm:flex-row gap-4 mb-6 ${loading ? 'opacity-50' : ''}`}>
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
