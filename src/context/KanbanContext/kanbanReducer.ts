import type { KanbanBoardModel } from "../../types/kanban"
import { type KanbanAction } from "./KanbanProvider"
import { v4 as uuidv4 } from "uuid"

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
