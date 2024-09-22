import { Menu, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Header = () => (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg">
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
            <Button variant="ghost" className="md:hidden text-gray-100">
                <Menu className="h-6 w-6" />
            </Button>
        </div>
    </header>
)
