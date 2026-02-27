import styles from "./KanbanBoardCard.module.css"
import type { KanbanCardModel } from "../../types/kanban"

interface KanbanBoardCardProps {
    card: KanbanCardModel
}

export function KanbanBoardCard({ card }: KanbanBoardCardProps) {
    return <div className={styles.card}>{card.text}</div>
}
