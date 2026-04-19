import { useState, type ReactNode } from "react"
import type { KanbanBoardModel } from "../../types/kanban"
import { KanbanContext } from "./KanbanContext"

interface KanbanProviderProps {
    children: ReactNode
    initialData: KanbanBoardModel
}

export  function KanbanProvider({ initialData, children }: KanbanProviderProps) {
    const [kanbanData, setKanbanData] = useState<KanbanBoardModel>(initialData)

    return (
        <KanbanContext.Provider value={{ kanbanData, setKanbanData }}>
            {children}
        </KanbanContext.Provider>
    )
}
