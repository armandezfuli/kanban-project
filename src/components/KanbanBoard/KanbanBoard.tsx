import { KanbanBoardCard } from "../KanbanBoardCard/KanbanBoardCard"
import styles from "./KanbanBoard.module.css"
import type { KanbanStatus, KanbanCardModel } from "../../types/kanban"
import { memo, type ReactNode } from "react"
interface KanbanBoardProps {
    status: KanbanStatus
    cards: KanbanCardModel[]
    onSelectCard: (id: string) => void
    selectedCard: string | null
}

const columnTitleMap: Record<KanbanStatus, string> = {
    todo: "To do",
    doing: "Doing",
    done: "Done",
}

const KanbanBoard = memo(function KanbanBoard({
    status,
    cards,
    onSelectCard,
    selectedCard,
}: KanbanBoardProps): ReactNode {
    return (
        <div className={styles.column}>
            <div className={styles["column-title"]}>{columnTitleMap[status]}</div>
            <div className={styles.cards}>
                {cards.map((card) => (
                    <KanbanBoardCard
                        key={card.id}
                        card={card}
                        onSelectCard={onSelectCard}
                        isSelected={selectedCard === card.id}
                    />
                ))}
            </div>
        </div>
    )
})

export { KanbanBoard }
