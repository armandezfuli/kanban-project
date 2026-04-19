import { useContext } from "react"
import { KanbanContext } from "./KanbanContext"

export default function useKanban() {
    const context = useContext(KanbanContext)
    if (context === undefined) {
        throw new Error("useKanban must be used within a KanbanProvider")
    }
    return context
}
