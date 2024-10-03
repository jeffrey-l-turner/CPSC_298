"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ZoomIn, ZoomOut } from 'lucide-react'

const machines = [
  { id: 1, name: 'Machine A', x: 100, y: 100 },
  { id: 2, name: 'Machine B', x: 300, y: 200 },
  { id: 3, name: 'Machine C', x: 500, y: 300 },
  { id: 4, name: 'Machine D', x: 200, y: 400 },
]

export function AnalyticsComponent() {
  const [zoom, setZoom] = useState(1)
  const [selectedMachine, setSelectedMachine] = useState(null)

  const handleZoom = (newZoom) => {
    setZoom(Math.max(0.5, Math.min(2, newZoom)))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      <Card>
        <CardHeader>
          <CardTitle>Factory Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Button onClick={() => handleZoom(zoom - 0.1)} size="sm">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Slider
                value={[zoom]}
                onValueChange={([value]) => handleZoom(value)}
                min={0.5}
                max={2}
                step={0.1}
                className="w-[200px]"
              />
              <Button onClick={() => handleZoom(zoom + 0.1)} size="sm">
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative w-full h-[600px] border rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-300 ease-in-out"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'top left',
              }}
            >
              {machines.map((machine) => (
                <div
                  key={machine.id}
                  className="absolute p-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors"
                  style={{ left: machine.x, top: machine.y }}
                  onClick={() => setSelectedMachine(machine)}
                >
                  {machine.name}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      {selectedMachine && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedMachine.name} Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Status: Operational</p>
              <p>Uptime: 98.7%</p>
              <p>Production Rate: 150 units/hour</p>
              <p>Energy Consumption: 75 kWh</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}