import { KanbanBoard } from "../KanbanBoard/KanbanBoard"
import styles from "./KanbanBoards.module.css"
import { useMemo, type ReactNode } from "react"
import { toast } from "react-toastify"
import clsx from "clsx"
import { useKanban } from "../../context/KanbanContext/useKanban"

export function KanbanBoards(): ReactNode {
    const { kanbanData, kanbanDispatch} = useKanban()

    const handleDeleteCard = (id: string) => {
        kanbanDispatch({ type: "DELETE_CARD", payload: { id } })
        toast.success("Card deleted successfully")
    }

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
        <section className={clsx(styles.board)}>
            <KanbanBoard
                status="todo"
                cards={todoCards}
                onDeleteCard={handleDeleteCard}
            />
            <KanbanBoard
                status="doing"
                cards={doingCards}
                onDeleteCard={handleDeleteCard}
            />
            <KanbanBoard
                status="done"
                cards={doneCards}
                onDeleteCard={handleDeleteCard}
            />
        </section>
    )
}
