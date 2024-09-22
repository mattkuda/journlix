"use client"

import { useState, useRef } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react"
import { prompts, Prompt, themes } from "../utils/prompts"



export const HeroSection = () => {
    const [selectedTheme, setSelectedTheme] = useState("")
    const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null)
    const [currentFollowUpIndex, setCurrentFollowUpIndex] = useState(-1)
    const [isPromptVisible, setIsPromptVisible] = useState(false)
    const [userResponse, setUserResponse] = useState("")
    const [previousResponses, setPreviousResponses] = useState<{ question: string; answer: string }[]>([])
    const [isCollapsed, setIsCollapsed] = useState(true)
    const samplePromptRef = useRef<HTMLDivElement>(null)

    const generatePrompt = () => {
        if (selectedTheme) {
            const themePrompts = prompts[selectedTheme];
            console.log("selectedTheme", selectedTheme)
            console.log("prompts", prompts)
            console.log("themePrompts", themePrompts)
            const randomPrompt = themePrompts[Math.floor(Math.random() * themePrompts.length)]
            setCurrentPrompt(randomPrompt)
            setCurrentFollowUpIndex(-1)
            setIsPromptVisible(true)
            setUserResponse("")
            setPreviousResponses([])
        }
    }

    const showNextFollowUp = () => {
        if (currentPrompt && currentFollowUpIndex < currentPrompt.followUps.length - 1) {
            setPreviousResponses([...previousResponses, {
                question: currentFollowUpIndex === -1 ? currentPrompt.question : currentPrompt.followUps[currentFollowUpIndex],
                answer: userResponse
            }])
            setCurrentFollowUpIndex(currentFollowUpIndex + 1)
            setUserResponse("")
        }
    }

    const scrollToSample = () => {
        samplePromptRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl font-bold mb-6">Unlock Your Inner Wisdom</h1>
            <p className="text-xl mb-8">Experience the power of AI-guided journaling with Journlix</p>
            <div className="flex justify-center space-x-4 mb-12">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">
                    Get Started Free
                </Button>
                <Button onClick={scrollToSample} variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-full text-lg">
                    Try a Sample
                </Button>
            </div>
            <div ref={samplePromptRef} className="max-w-2xl mx-auto space-y-6 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <Select onValueChange={(value: string) => setSelectedTheme(value)}>
                    <SelectTrigger className="bg-gray-700 text-gray-100 border-gray-600 rounded-xl">
                        <SelectValue placeholder="Select a journal theme" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 text-gray-100 border-gray-600">
                        {themes.map((theme) => (
                            <SelectItem key={theme.value} value={theme.value} className="focus:bg-purple-700">
                                {theme.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button
                    onClick={generatePrompt}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl py-6 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Generate Prompt <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                {isPromptVisible && currentPrompt && (
                    <div className="space-y-4">
                        {previousResponses.length > 0 && (
                            <div className="bg-gray-700 bg-opacity-80 p-4 rounded-xl">
                                <button
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                    className="flex items-center justify-between w-full text-left text-white"
                                >
                                    <span className="text-sm font-medium">Previous Responses</span>
                                    {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                                </button>
                                {!isCollapsed && (
                                    <div className="mt-2 space-y-2">
                                        {previousResponses.map((response, index) => (
                                            <div key={index} className="text-sm">
                                                <p className="font-medium text-white">{response.question}</p>
                                                <p className="text-gray-300">{response.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                        <div className="bg-gray-700 bg-opacity-80 p-6 rounded-xl animate-fade-in">
                            <p className="text-xl font-medium text-white mb-4">
                                {currentFollowUpIndex === -1 ? currentPrompt.question : currentPrompt.followUps[currentFollowUpIndex]}
                            </p>
                            <Textarea
                                value={userResponse}
                                onChange={(e) => setUserResponse(e.target.value)}
                                placeholder="Type your response here..."
                                className="w-full mt-4 bg-gray-600 text-white border-gray-500"
                            />
                            {currentFollowUpIndex >= currentPrompt.followUps.length - 1 &&
                                <div className="flex justify-end mt-4">
                                    <Button
                                        onClick={showNextFollowUp}
                                        className="bg-purple-600 hover:bg-purple-700 text-white"
                                        disabled={!userResponse || currentFollowUpIndex >= currentPrompt.followUps.length - 1}
                                    >
                                        Ask Follow Up
                                    </Button>
                                </div>}
                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}

