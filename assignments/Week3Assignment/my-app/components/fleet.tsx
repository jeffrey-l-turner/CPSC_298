'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const devices = [
  { id: 1, name: 'Machine A', status: 'up' },
  { id: 2, name: 'Machine B', status: 'down' },
  { id: 3, name: 'Machine C', status: 'inactive' },
  { id: 4, name: 'Machine D', status: 'up' },
  { id: 5, name: 'Machine E', status: 'up' },
]

const statusColors = {
  up: 'bg-green-500',
  down: 'bg-red-500',
  inactive: 'bg-yellow-500',
}

export function FleetComponent() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Fleet Overview</h2>
      <Card>
        <CardHeader>
          <CardTitle>Device Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell>{device.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${statusColors[device.status]}`}></div>
                      {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}