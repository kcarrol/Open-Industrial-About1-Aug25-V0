"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/components/ui/use-mobile"

interface MobileNavigationProps {
  currentPage?: string
}

export function MobileNavigation({ currentPage }: MobileNavigationProps) {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Use Cases", href: "/use-case/batch-quality" },
    { name: "Contact", href: "/contact" },
  ]

  if (!isMobile) {
    // Desktop navigation
    return (
      <nav className="flex items-center space-x-6">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-base hover:text-white transition-colors ${
              currentPage === item.name.toLowerCase() ||
              (currentPage === "home" && item.name === "Home") ||
              (currentPage === "use cases" && item.name === "Use Cases")
                ? "text-white font-bold"
                : "text-slate-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2" asChild>
          <a href="https://www.openindustrial.co/workspace">Get Started</a>
        </Button>
      </nav>
    )
  }

  // Mobile navigation with Sheet
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-slate-800">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-slate-900 border-slate-700">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center mb-8 pt-4">
            <Image src="/open-industrial-icon.svg" alt="Open Industrial" width={32} height={32} className="mr-3" />
            <span className="text-xl font-bold text-white">Open Industrial</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 flex-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg py-3 px-4 rounded-md transition-colors ${
                  currentPage === item.name.toLowerCase() ||
                  (currentPage === "home" && item.name === "Home") ||
                  (currentPage === "use cases" && item.name === "Use Cases")
                    ? "text-white font-bold bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="mt-auto pb-4">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              onClick={() => setOpen(false)}
              asChild
            >
              <a href="https://www.openindustrial.co/workspace">Get Started</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
