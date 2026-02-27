import { KanbanBoard } from "../KanbanBoard/KanbanBoard"
import styles from "./KanbanBoards.module.css"
import type { KanbanBoardModel } from "../../types/kanban"

interface KanbanBoardsProps {
    kanbanData: KanbanBoardModel
    onSelectCard: (id: string) => void
    selectedCard: string | null
}

export function KanbanBoards({
    kanbanData,
    onSelectCard,
    selectedCard,
}: KanbanBoardsProps) {
    const todoCards = kanbanData.cards.filter((c) => c.status === "todo")
    const doingCards = kanbanData.cards.filter((c) => c.status === "doing")
    const doneCards = kanbanData.cards.filter((c) => c.status === "done")

    return (
        <section className={styles.board}>
            <KanbanBoard
                status="todo"
                cards={todoCards}
                onSelectCard={onSelectCard}
                selectedCard={selectedCard}
            />
            <KanbanBoard
                status="doing"
                cards={doingCards}
                onSelectCard={onSelectCard}
                selectedCard={selectedCard}
            />
            <KanbanBoard
                status="done"
                cards={doneCards}
                onSelectCard={onSelectCard}
                selectedCard={selectedCard}
            />
        </section>
    )
}
