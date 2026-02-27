import styles from "./KanbanHeader.module.css"
import { Button } from "../Button/Button"

interface KanbanHeaderProps {
    title: string
    selectedCardId: string | null
    onDeleteCard: () => void
}

export function KanbanHeader({ title, selectedCardId, onDeleteCard }: KanbanHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.controls}>
                <Button disabled>To Do</Button>
                <Button disabled>Doing</Button>
                <Button disabled>Done</Button>

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
