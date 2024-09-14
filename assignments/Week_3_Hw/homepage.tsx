import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Car, Calendar, Clock, DollarSign, Search, Plus, MapPin } from "lucide-react"

interface Ride {
  id: number
  driver: string
  departureLocation: string
  destination: string
  departure: string
  arrival: string
  seats: number
  price: number
}

export default function HomePage() {
  const [rides, setRides] = useState<Ride[]>([
    { 
      id: 1, 
      driver: "Alice", 
      departureLocation: "Downtown Station",
      destination: "Airport Terminal 1",
      departure: "2023-06-15 09:00", 
      arrival: "2023-06-15 10:30", 
      seats: 3, 
      price: 15 
    },
    { 
      id: 2, 
      driver: "Bob", 
      departureLocation: "University Campus",
      destination: "Shopping Mall",
      departure: "2023-06-15 14:00", 
      arrival: "2023-06-15 15:15", 
      seats: 2, 
      price: 10 
    },
    { 
      id: 3, 
      driver: "Charlie", 
      departureLocation: "Central Park",
      destination: "Beach Boardwalk",
      departure: "2023-06-16 08:30", 
      arrival: "2023-06-16 09:45", 
      seats: 4, 
      price: 20 
    },
  ])

  const [contribution, setContribution] = useState<{ [key: number]: number }>({})

  const handleContribution = (id: number, amount: number) => {
    setContribution({ ...contribution, [id]: amount })
  }

  const handleJoinRide = (id: number) => {
    // Logic to join ride would go here
    console.log(`Joined ride ${id}`)
  }

  const handleContributeGas = (id: number) => {
    // Logic to contribute gas money would go here
    console.log(`Contributed ${contribution[id]} to ride ${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Collaborative Rideshare</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between mb-6">
              <Button className="flex items-center">
                <Plus className="mr-2 h-4 w-4" /> Schedule a Trip
              </Button>
              <Button variant="outline" className="flex items-center">
                <Search className="mr-2 h-4 w-4" /> Search for Rides
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rides.map((ride) => (
                <Card key={ride.id}>
                  <CardHeader>
                    <CardTitle>{ride.driver}&apos;s Ride</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-2">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>From: {ride.departureLocation}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="mr-2 h-4 w-4" />
                      <span>To: {ride.destination}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Departure: {ride.departure}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Arrival: {ride.arrival}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Car className="mr-2 h-4 w-4" />
                      <span>Available Seats: {ride.seats}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <DollarSign className="mr-2 h-4 w-4" />
                      <span>Estimated Gas Cost: ${ride.price}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-stretch">
                    <Button onClick={() => handleJoinRide(ride.id)} className="w-full mb-2">
                      I need a ride!
                    </Button>
                    <div className="flex items-center">
                      <Input
                        type="number"
                        placeholder="Contribution"
                        value={contribution[ride.id] || ''}
                        onChange={(e) => handleContribution(ride.id, parseFloat(e.target.value))}
                        className="mr-2"
                      />
                      <Button onClick={() => handleContributeGas(ride.id)} variant="outline">
                        Contribute
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}