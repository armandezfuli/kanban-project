import type { KanbanBoardModel } from "../../types/kanban"
import { type KanbanAction } from "./KanbanProvider"

export function kanbanReducer(state: KanbanBoardModel, action: KanbanAction) {
    switch (action.type) {
        case "DELETE_CARD":
            return {
                ...state,
                cards: state.cards.filter((c) => c.id !== action.payload.id),
            }
        case "MOVE_CARD":
            return {
                ...state,
                cards: state.cards.map((c) =>
                    c.id === action.payload.id
                        ? { ...c, status: action.payload.status }
                        : c
                ),
            }
        default:
            return state
    }
}
