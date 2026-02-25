import { KanbanBoard } from "../KanbanBoard/KanbanBoard"
import styles from "./KanbanBoards.module.css"
import type { KanbanBoardModel } from "../../types/kanban"

type KanbanBoardsProps = {
    kanbanData: KanbanBoardModel
}

export function KanbanBoards({ kanbanData }: KanbanBoardsProps) {
    const todoCards = kanbanData.cards.filter((c) => c.status === "todo")
    const doingCards = kanbanData.cards.filter((c) => c.status === "doing")
    const doneCards = kanbanData.cards.filter((c) => c.status === "done")

    return (
        <section className={styles.board}>
            <KanbanBoard status="todo" cards={todoCards} />
            <KanbanBoard status="doing" cards={doingCards} />
            <KanbanBoard status="done" cards={doneCards} />
        </section>
    )
}
