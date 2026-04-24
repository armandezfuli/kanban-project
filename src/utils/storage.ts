import type { KanbanBoardModel } from "../types/kanban"

const STORAGE_KEY = "KANBAN_STORAGE"

export function saveKanbanData(data: KanbanBoardModel): void {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (error) {
        console.error("Failed to save kanban data:", error)
    }
}

export function loadKanbanData(): KanbanBoardModel | null {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return null
        return JSON.parse(stored)
    } catch (error) {
        console.error("Failed to load kanban data:", error)
        return null
    }
}
