import { v4 as uuidv4 } from "uuid"
import type { KanbanBoardModel } from "../types/kanban"

const data: KanbanBoardModel = {
    title: "Learning Plan 2025",
    cards: [
        // ===== Todo Tasks =====
        // کوتاه
        {
            id: uuidv4(),
            text: "Learn English grammar",
            status: "todo",
        },
        {
            id: uuidv4(),
            text: "Practice React hooks",
            status: "todo",
        },
        // متوسط
        {
            id: uuidv4(),
            text: "Build a complete TypeScript project with full configuration",
            status: "todo",
        },
        {
            id: uuidv4(),
            text: "Read 'Clean Code' book - Chapter 3 about functions",
            status: "todo",
        },
        // بلند
        {
            id: uuidv4(),
            text: "Complete 10 LeetCode problems focusing on data structures, algorithms, and complexity analysis",
            status: "todo",
        },
        {
            id: uuidv4(),
            text: "Master CSS Grid and Flexbox for building complex responsive layouts with modern techniques",
            status: "todo",
        },

        // ===== Doing Tasks =====
        // کوتاه
        {
            id: uuidv4(),
            text: "Implement drag & drop",
            status: "doing",
        },
        {
            id: uuidv4(),
            text: "Write unit tests",
            status: "doing",
        },
        // متوسط
        {
            id: uuidv4(),
            text: "Learn Context API with TypeScript for type-safe state management",
            status: "doing",
        },
        // بلند
        {
            id: uuidv4(),
            text: "Setup ESLint, Prettier, and Husky with custom rules for consistent code quality across team",
            status: "doing",
        },

        // ===== Done Tasks =====
        // کوتاه
        {
            id: uuidv4(),
            text: "Setup Vite project",
            status: "done",
        },
        {
            id: uuidv4(),
            text: "Install Open Props",
            status: "done",
        },
        // متوسط
        {
            id: uuidv4(),
            text: "Create Kanban context with useReducer for state management",
            status: "done",
        },
        {
            id: uuidv4(),
            text: "Add toast notifications with custom animations",
            status: "done",
        },
        // بلند
        {
            id: uuidv4(),
            text: "Implement localStorage persistence to automatically save board data between browser sessions",
            status: "done",
        },
        {
            id: uuidv4(),
            text: "Create fully responsive design with CSS Grid, Flexbox, and mobile-first approach for all devices",
            status: "done",
        },
    ],
}

export { data }
