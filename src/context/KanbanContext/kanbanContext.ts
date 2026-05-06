import { createContext, type Dispatch } from "react"
import type { KanbanBoardModel } from "../../types/kanban"
import type { KanbanAction } from "./kanbanActions"

interface KanbanContextType {
    kanbanData: KanbanBoardModel
    kanbanDispatch: Dispatch<KanbanAction>
}

export const KanbanContext = createContext<KanbanContextType | undefined>(undefined)
