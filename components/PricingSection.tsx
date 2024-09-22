import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const PricingSection = () => (
    <section id="pricing" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Free", price: "$0", features: ["Daily Prompts", "Basic Journaling", "Community Support"] },
                    { title: "Pro", price: "$9.99", features: ["Unlimited Prompts", "Advanced Analytics", "Guided Courses", "Priority Support"] },
                    { title: "Teams", price: "Custom", features: ["Everything in Pro", "Team Collaboration", "Custom Integrations", "Dedicated Account Manager"] },
                ].map((plan, index) => (
                    <div key={index} className="bg-gray-700 rounded-xl p-6 text-center flex flex-col">
                        <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                        <p className="text-4xl font-bold mb-6">{plan.price}</p>
                        <ul className="mb-8 flex-grow">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center justify-center mb-2">
                                    <Check className="h-5 w-5 mr-2 text-green-400" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg">
                            Get Started
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
