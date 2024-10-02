'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import { Input } from "../rc/components/ui/input"
import { Button } from "../rc/components/ui/button"
import { Card, CardContent } from "../rc/components/ui/card"
import { Switch } from "../rc/components/ui/switch"
import { Sun, Moon } from 'lucide-react'
type TemperatureUnit = 'C' | 'F'


export default function WeatherApp() {
  const [darkMode, setDarkMode] = useState(false);

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
        </CardContent>
      </Card>
    </div>
  )
}
