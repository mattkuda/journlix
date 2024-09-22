// 'use client'

// import { useState } from "react"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { ArrowRight, BookOpen, Check, Menu, Sparkles, Star } from "lucide-react"

// const themes = [
//   { value: "goal-setting", label: "Goal Setting" },
//   { value: "self-reflection", label: "Self-Reflection" },
//   { value: "gratitude", label: "Gratitude" },
//   { value: "personal-growth", label: "Personal Growth" },
// ]

// const prompts = {
//   "goal-setting": [
//     "What is one goal you want to achieve in the next month?",
//     "How can you break down your long-term goals into smaller, actionable steps?",
//   ],
//   "self-reflection": [
//     "What is one thing you're proud of from this past week?",
//     "In what area of your life do you feel you need to improve the most?",
//   ],
//   "gratitude": [
//     "List three things you're grateful for today and why.",
//     "Who is someone you're thankful for, and how have they positively impacted your life?",
//   ],
//   "personal-growth": [
//     "What is one new skill you'd like to learn and why?",
//     "Describe a challenge you've overcome recently and what you learned from it.",
//   ],
// }

// export function JournalPromptLandingComponent() {
//   const [selectedTheme, setSelectedTheme] = useState("")
//   const [currentPrompt, setCurrentPrompt] = useState("")
//   const [isPromptVisible, setIsPromptVisible] = useState(false)

//   const generatePrompt = () => {
//     if (selectedTheme) {
//       const themePrompts = prompts[selectedTheme as keyof typeof prompts]
//       const randomPrompt = themePrompts[Math.floor(Math.random() * themePrompts.length)]
//       setCurrentPrompt(randomPrompt)
//       setIsPromptVisible(true)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100">
//       {/* Header */}
//       <header className="bg-gray-800 bg-opacity-50 backdrop-blur-lg">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <BookOpen className="h-6 w-6 text-purple-400" />
//             <span className="text-xl font-bold">Journlix</span>
//           </div>
//           <nav className="hidden md:flex space-x-4">
//             <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
//             <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
//             <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" className="text-gray-100 hover:text-purple-400 transition-colors">Log In</Button>
//             <Button className="bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
//           </div>
//           <Button variant="ghost" className="md:hidden text-gray-100">
//             <Menu className="h-6 w-6" />
//           </Button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-20 text-center">
//         <h1 className="text-5xl font-bold mb-6">Unlock Your Inner Wisdom</h1>
//         <p className="text-xl mb-8">Experience the power of AI-guided journaling with Journlix</p>
//         <div className="max-w-2xl mx-auto space-y-6 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
//           <Select onValueChange={(value) => setSelectedTheme(value)}>
//             <SelectTrigger className="bg-gray-700 text-gray-100 border-gray-600 rounded-xl">
//               <SelectValue placeholder="Select a journal theme" />
//             </SelectTrigger>
//             <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
//               {themes.map((theme) => (
//                 <SelectItem key={theme.value} value={theme.value} className="focus:bg-purple-700">
//                   {theme.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           <Button
//             onClick={generatePrompt}
//             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl py-6 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
//           >
//             Generate Prompt <Sparkles className="ml-2 h-5 w-5" />
//           </Button>
//           {isPromptVisible && (
//             <div className="bg-gray-700 bg-opacity-50 p-6 rounded-xl animate-fade-in">
//               <p className="text-xl font-medium text-gray-100">{currentPrompt}</p>
//             </div>
//           )}
//         </div>
//         <div className="mt-12 flex justify-center space-x-4">
//           <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">
//             Get Started Free
//           </Button>
//           <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-full text-lg">
//             Learn More
//           </Button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="bg-gray-800 py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Empower Your Journaling Journey</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: Sparkles, title: "AI-Powered Prompts", description: "Unlock creativity with our intelligent prompt generator" },
//               { icon: ArrowRight, title: "Guided Reflection", description: "Dive deeper into your thoughts with follow-up questions" },
//               { icon: Star, title: "Personal Growth", description: "Track your progress and insights over time" },
//             ].map((feature, index) => (
//               <div key={index} className="bg-gray-700 rounded-xl p-6 text-center">
//                 <feature.icon className="h-12 w-12 mx-auto mb-4 text-purple-400" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-300">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">About Journlix</h2>
//           <div className="max-w-3xl mx-auto text-center">
//             <p className="text-xl mb-6">
//               Journlix combines the power of artificial intelligence with the proven benefits of journaling to help you
//               unlock your full potential. Our platform offers personalized prompts, guided reflection, and powerful
//               insights to support your personal growth journey.
//             </p>
//             <p className="text-xl">
//               Whether you're looking to achieve your goals, practice gratitude, or simply understand yourself better,
//               Journlix is your trusted companion in self-discovery.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="bg-gray-800 py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Choose Your Journey</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: "Free", price: "$0", features: ["Daily Prompts", "Basic Journaling", "Community Support"] },
//               { title: "Pro", price: "$9.99", features: ["Unlimited Prompts", "Advanced Analytics", "Guided Courses", "Priority Support"] },
//               { title: "Teams", price: "Custom", features: ["Everything in Pro", "Team Collaboration", "Custom Integrations", "Dedicated Account Manager"] },
//             ].map((plan, index) => (
//               <div key={index} className="bg-gray-700 rounded-xl p-6 text-center flex flex-col">
//                 <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
//                 <p className="text-4xl font-bold mb-6">{plan.price}</p>
//                 <ul className="mb-8 flex-grow">
//                   {plan.features.map((feature, fIndex) => (
//                     <li key={fIndex} className="flex items-center justify-center mb-2">
//                       <Check className="h-5 w-5 mr-2 text-green-400" /> {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg">
//                   Get Started
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h4 className="text-xl font-semibold mb-4">Journlix</h4>
//               <p className="text-gray-400">Empowering self-discovery through AI-guided journaling</p>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
//                 <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
//                 <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
//                 <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold mb-4">Legal</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold mb-4">Connect</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Facebook</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Instagram</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-12 text-center text-gray-400">
//             <p>&copy; 2024 Journlix. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }