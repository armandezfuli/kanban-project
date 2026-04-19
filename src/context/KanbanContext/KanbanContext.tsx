import { createContext, type Dispatch } from "react"
import type { KanbanBoardModel } from "../../types/kanban"
import type { KanbanAction } from "./KanbanProvider"

interface KanbanContextValue {
    kanbanData: KanbanBoardModel
    dispatch: Dispatch<KanbanAction>
}

export const KanbanContext = createContext<KanbanContextValue | undefined>(undefined)
