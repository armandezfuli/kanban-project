import { KanbanBoard } from "../KanbanBoard/KanbanBoard"
import styles from "./KanbanBoards.module.css"
import type { KanbanBoardModel } from "../../types/kanban"
import { useMemo, type ReactNode } from "react"

interface KanbanBoardsProps {
    kanbanData: KanbanBoardModel
    onSelectCard: (id: string) => void
    selectedCard: string | null
}

export function KanbanBoards({
    kanbanData,
    onSelectCard,
    selectedCard,
}: KanbanBoardsProps): ReactNode {
    const todoCards = useMemo(
        () => kanbanData.cards.filter((c) => c.status === "todo"),
        [kanbanData]
    )

    const doingCards = useMemo(
        () => kanbanData.cards.filter((c) => c.status === "doing"),
        [kanbanData]
    )

    const doneCards = useMemo(
        () => kanbanData.cards.filter((c) => c.status === "done"),
        [kanbanData]
    )

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
