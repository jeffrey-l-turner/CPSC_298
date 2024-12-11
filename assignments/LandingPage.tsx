import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cat, Dog, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Backyard Paw Patrol</h1>
          <p className="text-xl text-green-600">A Cozy Crime-Fighting Adventure</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">About the Game</h2>
            <p className="text-gray-700 mb-4">
              Join Whiskers the cat and Barkley the dog in their exciting adventures as they protect their owner's backyard from mischievous critters and solve mini-mysteries. This cozy game combines puzzle-solving, exploration, and teamwork in a charming, family-friendly setting.
            </p>
            <div className="flex justify-center space-x-4">
              <Cat className="text-orange-500 w-12 h-12" />
              <Dog className="text-brown-500 w-12 h-12" />
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Backyard Paw Patrol Game Screenshot"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Get Your Paws on It!</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Base Game</CardTitle>
              <CardDescription>Start your backyard adventure</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600 mb-2">$19.99</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Full game experience</li>
                <li>10 exciting missions</li>
                <li>Unlock special pet outfits</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Base Game
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Creator's Edition</CardTitle>
              <CardDescription>The ultimate fan experience</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600 mb-2">$29.99</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Everything in the Base Game</li>
                <li>5 additional bonus missions</li>
                <li>Digital artbook and soundtrack</li>
                <li>Exclusive golden pet accessories</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Creator's Edition
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}