import { v4 as uuidv4 } from "uuid"
import type { KanbanBoardModel } from "../types/kanban"

const data: KanbanBoardModel = {
    title: "Learning Plan",
    cards: [
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
        {
            id: uuidv4(),
            text: "Build a small TypeScript project",
            status: "doing",
        },
        {
            id: uuidv4(),
            text: "Read about state management",
            status: "doing",
        },
        {
            id: uuidv4(),
            text: "Setup project with Vite",
            status: "done",
        },
    ],
}

export { data }
