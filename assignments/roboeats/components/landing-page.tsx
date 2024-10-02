'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function LandingPage() {
  const [meal, setMeal] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission,
    // such as sending the data to your backend
    console.log('Order submitted:', { meal, address })
    // Reset form fields
    setMeal('')
    setAddress('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">RoboEats Campus Delivery</h1>
          <p className="text-xl text-gray-600">Delicious meals delivered by our friendly robots, right to your dorm!</p>
        </header>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Place Your Order</CardTitle>
            <CardDescription>Select your meal and provide your delivery details</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="meal">Select Your Meal</Label>
                <Select value={meal} onValueChange={setMeal}>
                  <SelectTrigger id="meal">
                    <SelectValue placeholder="Choose a meal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="burger">Classic Burger</SelectItem>
                    <SelectItem value="pizza">Pepperoni Pizza</SelectItem>
                    <SelectItem value="salad">Caesar Salad</SelectItem>
                    <SelectItem value="pasta">Spaghetti Bolognese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your campus address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment">Payment Information</Label>
                <Input id="payment" type="text" placeholder="Card number" />
                <div className="flex gap-4">
                  <Input type="text" placeholder="MM/YY" className="w-1/2" />
                  <Input type="text" placeholder="CVC" className="w-1/2" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Place Order</Button>
          </CardFooter>
        </Card>

        <footer className="mt-12 text-center text-gray-600">
          <p>© 2023 RoboEats Campus Delivery. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}