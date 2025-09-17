"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useIsMobile } from "@/components/ui/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface MobileNavigationProps {
  currentPage?: string
}

export function MobileNavigation({ currentPage }: MobileNavigationProps) {
  const [open, setOpen] = useState(false)
  const [useCasesOpen, setUseCasesOpen] = useState(false)
  const isMobile = useIsMobile()

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // Use Cases will be handled separately with dropdown
    { name: "Docs", href: "https://www.openindustrial.co/docs" },
    { name: "Contact", href: "/contact" },
  ]

  const useCases = [{ name: "Batch Quality", href: "/use-case/batch-quality" }]

  if (!isMobile) {
    // Desktop navigation
    return (
      <nav className="flex items-center space-x-6">
        {navigationItems.slice(0, 2).map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-base hover:text-white transition-colors ${
              currentPage === item.name.toLowerCase() || (currentPage === "home" && item.name === "Home")
                ? "text-white font-bold"
                : "text-slate-300"
            }`}
          >
            {item.name}
          </Link>
        ))}

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`text-base bg-transparent hover:bg-slate-800 hover:text-white transition-colors border-none ${
                  currentPage === "use cases" || currentPage === "batch quality"
                    ? "text-white font-bold"
                    : "text-slate-300"
                }`}
              >
                Use Cases
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white border-slate-200 shadow-lg">
                <div className="w-48 p-2">
                  {useCases.map((useCase) => (
                    <NavigationMenuLink key={useCase.name} asChild>
                      <Link
                        href={useCase.href}
                        className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-medium"
                      >
                        {useCase.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {navigationItems.slice(2).map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-base hover:text-white transition-colors ${
              currentPage === item.name.toLowerCase() ? "text-white font-bold" : "text-slate-300"
            }`}
            {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
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
          <div className="flex items-center mb-8 pt-4">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
              <Image src="/open-industrial-icon.svg" alt="Open Industrial" width={32} height={32} className="mr-3" />
              <span className="text-xl font-bold text-white">Open Industrial</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 flex-1">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg py-3 px-4 rounded-md transition-colors ${
                  currentPage === item.name.toLowerCase() || (currentPage === "home" && item.name === "Home")
                    ? "text-white font-bold bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div>
              <button
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                className={`w-full text-left text-lg py-3 px-4 rounded-md transition-colors flex items-center justify-between ${
                  currentPage === "use cases" || currentPage === "batch quality"
                    ? "text-white font-bold bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                Use Cases
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${useCasesOpen ? "rotate-180" : ""}`} />
              </button>
              {useCasesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {useCases.map((useCase) => (
                    <Link
                      key={useCase.name}
                      href={useCase.href}
                      onClick={() => setOpen(false)}
                      className="block text-base py-2 px-4 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                    >
                      {useCase.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigationItems.slice(2).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg py-3 px-4 rounded-md transition-colors ${
                  currentPage === item.name.toLowerCase()
                    ? "text-white font-bold bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
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
