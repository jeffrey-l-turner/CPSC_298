'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BarChart2, Grid, Truck, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      <button
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-6 w-6" />
      </button>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 transform bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 w-64",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:inset-0"
        )}
      >
        <div className="flex items-center justify-center h-20 border-b">
          <h1 className="text-xl font-bold text-gray-800">Factory Dashboard</h1>
        </div>
        <nav className="mt-6">
          <Link href="/" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Grid className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link href="/analytics" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <BarChart2 className="h-5 w-5 mr-3" />
            Analytics
          </Link>
          <Link href="/fleet" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Truck className="h-5 w-5 mr-3" />
            Fleet
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}