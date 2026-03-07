import styles from "./KanbanBoardCard.module.css"
import type { KanbanCardModel } from "../../types/kanban"
import type { ReactNode } from "react"

interface KanbanBoardCardProps {
    card: KanbanCardModel
    onSelectCard: (id: string) => void
    isSelected: boolean
}

export function KanbanBoardCard({
    card,
    onSelectCard,
    isSelected,
}: KanbanBoardCardProps): ReactNode {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        onSelectCard(card.id)
    }

    return (
        <div
            className={`
            ${styles.card}
            ${isSelected ? styles["card-selected"] : ""}
        `}
            onClick={handleClick}>
            {card.text}
        </div>
    )
}
