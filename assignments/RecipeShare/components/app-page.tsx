'use client'

import Link from 'next/link'

interface Recipe {
  id: number;
  title: string;
  description: string;
}

const recipes: Recipe[] = [
  { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish." },
  { id: 2, title: "Chicken Tikka Masala", description: "A popular Indian curry dish." },
  { id: 3, title: "Caesar Salad", description: "A refreshing salad with Roman origins." },
]

export function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">RecipeShare</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold mb-4">Latest Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <Link href={`/recipe/${recipe.id}`} key={recipe.id} className="block">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{recipe.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{recipe.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}