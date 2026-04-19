import { KanbanBoardCard } from "../KanbanBoardCard/KanbanBoardCard"
import styles from "./KanbanBoard.module.css"
import type { KanbanStatus, KanbanCardModel } from "../../types/kanban"
import { memo, useCallback, type ReactNode } from "react"
import { useSelectedId } from "../../context/KanbanContext/SelectedIdContext"
interface KanbanBoardProps {
    status: KanbanStatus
    cards: KanbanCardModel[]
}

const columnTitleMap: Record<KanbanStatus, string> = {
    todo: "To do",
    doing: "Doing",
    done: "Done",
}

const KanbanBoard = memo(function KanbanBoard({
    status,
    cards,
}: KanbanBoardProps): ReactNode {
    const { selectedId, setSelectedId } = useSelectedId()

    const handleSelectCard = useCallback(
        (id: string) => {
            setSelectedId((prev) => (prev === id ? undefined : id))
        },
        [setSelectedId]
    )

    return (
        <div className={styles.column}>
            <div className={styles["column-title"]}>{columnTitleMap[status]}</div>
            <div className={styles.cards}>
                {cards.map((card) => (
                    <KanbanBoardCard
                        key={card.id}
                        card={card}
                        onSelectCard={handleSelectCard}
                        isSelected={selectedId === card.id}
                    />
                ))}
            </div>
        </div>
    )
})

export { KanbanBoard }
