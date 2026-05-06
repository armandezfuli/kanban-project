import styles from "./KanbanBoardCard.module.css"
import type { KanbanCardModel } from "../../types/kanban"
import { memo, type ReactNode } from "react"
import { Button } from "../Button/Button"
import { FiTrash2 } from "react-icons/fi"
import clsx from "clsx"

interface KanbanBoardCardProps {
    card: KanbanCardModel
    onDelete: (id: string) => void
}

const KanbanBoardCard = memo(function KanbanBoardCard({
    card,
    onDelete,
}: KanbanBoardCardProps): ReactNode {
    return (
        <div className={clsx(styles.card)}>
            <span>{card.text}</span>
            <div className={clsx(styles.deleteButton)}>
                <Button
                    variant="delete"
                    icon={<FiTrash2 />}
                    onClick={() => onDelete?.(card.id)}
                    style={{ color: "var(--red-9)", fontSize: "1.2rem" }}
                />
            </div>
        </div>
    )
})

export { KanbanBoardCard }
