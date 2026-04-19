import { KanbanBoard } from "../KanbanBoard/KanbanBoard"
import styles from "./KanbanBoards.module.css"
import { useMemo, type ReactNode } from "react"
import useKanban from "../../context/KanbanContext/useKanban"

export function KanbanBoards(): ReactNode {
    const { kanbanData } = useKanban()

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
            <KanbanBoard status="todo" cards={todoCards} />
            <KanbanBoard status="doing" cards={doingCards} />
            <KanbanBoard status="done" cards={doneCards} />
        </section>
    )
}
