import { KanbanBoardCard } from "../KanbanBoardCard/KanbanBoardCard"
import styles from "./KanbanBoard.module.css"
import type { KanbanStatus, KanbanCardModel } from "../../types/kanban"
type KanbanBoardProps = {
    status: KanbanStatus
    cards: KanbanCardModel[]
}

const columnTitleMap: Record<KanbanStatus, string> = {
    todo: "To do",
    doing: "Doing",
    done: "Done",
}

export function KanbanBoard({ status, cards }: KanbanBoardProps) {
    return (
        <div className={styles.column}>
            <div className={styles["column-title"]}>{columnTitleMap[status]}</div>

            <div className={styles.cards}>
                {cards.map((card) => (
                    <KanbanBoardCard key={card.id} card={card} />
                ))}
            </div>
        </div>
    )
}
