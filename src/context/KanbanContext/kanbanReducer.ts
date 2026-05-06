import type { KanbanBoardModel } from "../../types/kanban"
import { v4 as uuidv4 } from "uuid"
import type { KanbanAction } from "./kanbanActions"

export function kanbanReducer(state: KanbanBoardModel, action: KanbanAction) {
    switch (action.type) {
        case "ADD_CARD":
            const newCard = {
                id: uuidv4(),
                text: action.payload.text,
                status: action.payload.status,
            }
            return {
                ...state,
                cards: [...state.cards, newCard],
            }
        case "DELETE_CARD":
            return {
                ...state,
                cards: state.cards.filter((c) => c.id !== action.payload.id),
            }
        default:
            return state
    }
}
