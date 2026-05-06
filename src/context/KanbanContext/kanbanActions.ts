import type { KanbanStatus } from "../../types/kanban"

export type KanbanAction =
    | { type: "DELETE_CARD"; payload: { id: string } }
    | { type: "ADD_CARD"; payload: { text: string; status: KanbanStatus } }
