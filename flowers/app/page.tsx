import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Colorful flowers in bloom"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Bloom & Blossom
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 max-w-3xl">
          Bringing nature's beauty to your doorstep with our exquisite floral arrangements
        </p>
        <Button className="px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200">
          Shop Now
        </Button>
      </div>
    </section>
  )
}