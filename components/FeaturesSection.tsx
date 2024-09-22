import { Sparkles, ArrowRight, Star } from "lucide-react"

export const FeaturesSection = () => (
    <section id="features" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Empower Your Journaling Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Sparkles, title: "AI-Powered Prompts", description: "Unlock creativity with our intelligent prompt generator" },
                    { icon: ArrowRight, title: "Guided Reflection", description: "Dive deeper into your thoughts with follow-up questions" },
                    { icon: Star, title: "Personal Growth", description: "Track your progress and insights over time" },
                ].map((feature, index) => (
                    <div key={index} className="bg-gray-700 rounded-xl p-6 text-center">
                        <feature.icon className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
