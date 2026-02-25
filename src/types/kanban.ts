export type KanbanStatus = "todo" | "doing" | "done"
export interface KanbanCardModel {
    id: string
    text: string
    status: KanbanStatus
}
export interface KanbanBoardModel {
    title: string
    cards: KanbanCardModel[]
}
