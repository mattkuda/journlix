export const Footer = () => (
    <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-xl font-semibold mb-4">Journlix</h4>
                    <p className="text-gray-400">Empowering self-discovery through AI-guided journaling</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
                        <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
                        <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Connect</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Facebook</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 text-center text-gray-400">
                <p>&copy; 2024 Journlix. All rights reserved.</p>
            </div>
        </div>
    </footer>
)
