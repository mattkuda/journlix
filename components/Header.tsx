"use client"

import { useState } from "react"
import { Menu, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeSheet = () => setIsOpen(false)

    return (
        <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-purple-400" />
                    <span className="text-xl font-bold">Journlix</span>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
                    <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                    <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" className="text-gray-100 hover:text-purple-400 transition-colors">Log In</Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="md:hidden text-gray-100">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-gray-800 text-gray-100">
                        <SheetHeader>
                            <SheetTitle className="text-gray-100">Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 mt-6">
                            <a href="#features" className="hover:text-purple-400 transition-colors" onClick={closeSheet}>Features</a>
                            <a href="#about" className="hover:text-purple-400 transition-colors" onClick={closeSheet}>About</a>
                            <a href="#pricing" className="hover:text-purple-400 transition-colors" onClick={closeSheet}>Pricing</a>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
