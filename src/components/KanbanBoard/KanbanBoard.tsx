import { KanbanBoardCard } from "../KanbanBoardCard/KanbanBoardCard"
import styles from "./KanbanBoard.module.css"
import type { KanbanStatus, KanbanCardModel } from "../../types/kanban"
import { memo, type ReactNode } from "react"
import clsx from "clsx"
interface KanbanBoardProps {
    status: KanbanStatus
    cards: KanbanCardModel[]
    onDeleteCard: (id: string) => void
}

const columnTitleMap: Record<KanbanStatus, string> = {
    todo: "To do",
    doing: "Doing",
    done: "Done",
}

const KanbanBoard = memo(function KanbanBoard({
    status,
    cards,
    onDeleteCard,
}: KanbanBoardProps): ReactNode {
    return (
        <div className={styles.column}>
            <div className={clsx(styles["column-title"])}>{columnTitleMap[status]}</div>
            <div className={clsx(styles.cards)}>
                {cards.map((card) => (
                    <KanbanBoardCard key={card.id} card={card} onDelete={onDeleteCard} />
                ))}
            </div>
        </div>
    )
})

export { KanbanBoard }
