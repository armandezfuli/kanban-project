import styles from "./KanbanHeader.module.css"
import { Button } from "../Button/Button"
import type { KanbanStatus } from "../../types/kanban"

interface KanbanHeaderProps {
    title: string
    selectedCardId: string | null
    selectedCardStatus: KanbanStatus | null
    onDeleteCard: () => void
    onMoveCard: (status: KanbanStatus) => void
}

export function KanbanHeader({
    title,
    selectedCardId,
    onDeleteCard,
    onMoveCard,
    selectedCardStatus,
}: KanbanHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.controls}>
                <Button
                    disabled={!selectedCardId || selectedCardStatus === "todo"}
                    onClick={() => onMoveCard("todo")}>
                    To Do
                </Button>

                <Button
                    disabled={!selectedCardId || selectedCardStatus === "doing"}
                    onClick={() => onMoveCard("doing")}>
                    Doing
                </Button>

                <Button
                    disabled={!selectedCardId || selectedCardStatus === "done"}
                    onClick={() => onMoveCard("done")}>
                    Done
                </Button>

                <Button
                    variant="danger"
                    disabled={!selectedCardId}
                    onClick={onDeleteCard}>
                    Delete
                </Button>
            </div>
        </header>
    )
}
