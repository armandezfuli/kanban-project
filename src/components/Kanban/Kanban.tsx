import styles from "./Kanban.module.css"
import { KanbanHeader } from "../KanbanHeader/KanbanHeader"
import { KanbanBoards } from "../KanbanBoards/KanbanBoards"
import type { KanbanBoardModel } from "../../types/kanban"
import { useState } from "react"

interface KanbanProps {
    data: KanbanBoardModel
}

export function Kanban({ data }: KanbanProps) {
    const [kanbanData, setKanbanData] = useState<KanbanBoardModel>(data)
    const [selectedCard, setSelectedCard] = useState<null | string>(null)

    const handleSelectCard = (id: string) => {
        setSelectedCard((prev) => (prev === id ? null : id))
    }

    const handleDeleteCard = () => {
        if (!selectedCard) return
        setKanbanData((prev) => ({
            ...prev,
            cards: prev.cards.filter((c) => c.id !== selectedCard),
        }))
        setSelectedCard(null)
    }
    

    return (
        <section className={styles.kanban}>
            <KanbanHeader
                title={kanbanData.title}
                selectedCardId={selectedCard}
                onDeleteCard={handleDeleteCard}
            />
            <KanbanBoards
                kanbanData={kanbanData}
                onSelectCard={handleSelectCard}
                selectedCard={selectedCard}
            />
        </section>
    )
}
