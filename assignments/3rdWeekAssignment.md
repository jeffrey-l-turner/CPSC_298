## V0 Generated Front-End App
I wanted to use V0 to create something relevant in my minor. So I through of a video game idea and asked it to create a front page for it.

+ "I want to make a page for an upcoming cozy game revolving around a cat and a dog fighting crime in their owners backyard. I want there to be a small description of the game and a store front for two purchase options, one for the base game and one for the creators edition"

I saw that V0 offers a limited range of free themes, so I decide to go with one that I felt fit the description of the game I would be advertising. 

Although the website felt a bit bland, it still gave me a great starting point to go off of. As someone who would see this game being more for indie studios, the simplicity of the website shows that.

As someone who created their portfolio with Vercel this summer, V0 seems like a nobrainer creation. I think for the average person who isn't super interested in coding or maybe doesn't have time to create a concept website, v0 is great.

![First Half of the Website](https://imgur.com/a/1slAUs3)

'''jsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <PawPrintIcon className="h-6 w-6" />
            <span className="text-2xl font-bold">Backyard Detectives</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Buy Now
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Backyard Detectives</h1>
              <p className="text-muted-foreground md:text-xl">
                Join Whiskers the cat and Buddy the dog as they uncover mysteries and solve crimes in their owner's
                backyard. Explore a vibrant world filled with quirky characters, hidden treasures, and unexpected
                twists.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Buy Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={600}
                alt="Backyard Detectives"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                Rated E for Everyone
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Backyard Detectives</h2>
              <p className="text-muted-foreground md:text-xl">
                Choose from our standard edition or the creator's edition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Backyard Detectives</CardTitle>
                  <CardDescription>Standard Edition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Experience the full adventure of Whiskers and Buddy as they solve mysteries and uncover the
                      secrets of their owner's backyard.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold">$19.99</div>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backyard Detectives</CardTitle>
                  <CardDescription>Creator's Edition</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Get the standard edition plus exclusive in-game items, behind-the-scenes content, and a digital
                      art book.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold">$29.99</div>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <PawPrintIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Backyard Detectives</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PawPrintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
}
'''