import { useEffect, useReducer, type ReactNode } from "react"
import type { KanbanBoardModel } from "../../types/kanban"
import { KanbanContext } from "./kanbanContext"
import { kanbanReducer } from "./kanbanReducer"
import { saveKanbanData } from "../../utils/storage"

interface KanbanProviderProps {
    children: ReactNode
    initialData: KanbanBoardModel
}

export function KanbanProvider({ initialData, children }: KanbanProviderProps) {
    const [kanbanData, kanbanDispatch] = useReducer(kanbanReducer, initialData)

    useEffect(() => {
        saveKanbanData(kanbanData)
    }, [kanbanData])

    return (
        <KanbanContext.Provider value={{ kanbanData, kanbanDispatch }}>
            {children}
        </KanbanContext.Provider>
    )
}
