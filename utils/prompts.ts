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
    "gratitude": [
        {
            question: "What are you grateful for today?",
            followUps: [
                "How can you express your gratitude to those who have helped you?",
                "How does feeling grateful make you feel?",
                "Can you think of a time when feeling grateful made a difficult situation easier?",
            ],
        },
        {
            question: "What is one thing you couldn't live without?",
            followUps: [
                "Why is this so important to you?",
                "How does it make you feel to have this item with you?",
                "Can you think of a time when having this item made a difficult situation easier?",
            ],
        },
    ],
    "personal-growth": [
        {
            question: "What is one thing you're proud of from this past week?",
            followUps: [
                "Why does this achievement feel significant to you?",
                "How can you build on this success in the coming week?",
                "Who else might appreciate or benefit from hearing about this accomplishment?",
            ],
        },
        {
            question: "What is one thing you've been neglecting in your personal life?",
            followUps: [
                "Why have you been neglecting this?",
                "Why is this important to you?",
                "How can you make time for this in your schedule?",
                "Who else might benefit from your attention in this area?",
            ],
        },
    ],
};