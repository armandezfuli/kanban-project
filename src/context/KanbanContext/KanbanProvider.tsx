import { useReducer, type ReactNode } from "react"
import type { KanbanBoardModel, KanbanStatus } from "../../types/kanban"
import { KanbanContext } from "./KanbanContext"
import { kanbanReducer } from "./kanbanReducer"

interface KanbanProviderProps {
    children: ReactNode
    initialData: KanbanBoardModel
}

export type KanbanAction =
    | { type: "DELETE_CARD"; payload: { id: string } }
    | { type: "MOVE_CARD"; payload: { id: string, status: KanbanStatus } }


export function KanbanProvider({ initialData, children }: KanbanProviderProps) {
    const [kanbanData, dispatch] = useReducer(kanbanReducer, initialData)

    return (
        <KanbanContext.Provider value={{ kanbanData, dispatch }}>
            {children}
        </KanbanContext.Provider>
    )
}
