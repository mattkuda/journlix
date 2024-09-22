export interface Prompt {
    question: string;
    followUps: string[];
}

export interface PromptTheme {
    [key: string]: Prompt[];
}

export interface Theme {
    value: string;
    label: string;
}

export const themes: Theme[] = [
    { value: "goal-setting", label: "Goal Setting" },
    { value: "self-reflection", label: "Self-Reflection" },
    { value: "gratitude", label: "Gratitude" },
    { value: "personal-growth", label: "Personal Growth" },
]

export const prompts: PromptTheme = {
    "goal-setting": [
        {
            question: "What is one goal you want to achieve in the next month?",
            followUps: [
                "What habits can you put in place to support this goal?",
                "What roadblocks do you need to be aware of?",
                "How will you measure your progress towards this goal?",
            ],
        },
        {
            question: "How can you break down your long-term goals into smaller, actionable steps?",
            followUps: [
                "Which step feels most achievable to start with?",
                "What resources or support might you need for each step?",
                "How will completing these steps contribute to your overall goal?",
            ],
        },
    ],
    "self-reflection": [
        {
            question: "What is one thing you're proud of from this past week?",
            followUps: [
                "Why does this achievement feel significant to you?",
                "How can you build on this success in the coming week?",
                "Who else might appreciate or benefit from hearing about this accomplishment?",
            ],
        },
        {
            question: "In what area of your life do you feel you need to improve the most?",
            followUps: [
                "What specific changes would you like to see in this area?",
                "What's one small step you can take today towards improvement?",
                "How might improving in this area positively impact other aspects of your life?",
            ],
        },
    ],
    // Add more themes and prompts as needed
};