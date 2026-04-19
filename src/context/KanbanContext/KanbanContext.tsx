import { createContext } from "react"
import type { KanbanBoardModel } from "../../types/kanban"

interface KanbanContextValue {
    kanbanData: KanbanBoardModel
    setKanbanData: React.Dispatch<React.SetStateAction<KanbanBoardModel>>
}

export  const KanbanContext = createContext<KanbanContextValue | undefined>(undefined)
