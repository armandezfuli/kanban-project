import styles from "./KanbanBoardCard.module.css"
import type { KanbanCardModel } from "../../types/kanban"

type KanbanBoardCardProps = {
    card: KanbanCardModel
}

export function KanbanBoardCard({ card }: KanbanBoardCardProps) {
    return <div className={styles.card}>{card.text}</div>
}
