import styles from "./KanbanBoardCard.module.css"
import type { KanbanCardModel } from "../../types/kanban"

interface KanbanBoardCardProps {
    card: KanbanCardModel
    onSelectCard: (id: string) => void
    isSelected: boolean
}

export function KanbanBoardCard({
    card,
    onSelectCard,
    isSelected,
}: KanbanBoardCardProps) {
    const handleClick = () => {
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
