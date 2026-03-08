import styles from "./Kanban.module.css"
import { KanbanHeader } from "../KanbanHeader/KanbanHeader"
import { KanbanBoards } from "../KanbanBoards/KanbanBoards"
import type { KanbanBoardModel, KanbanStatus } from "../../types/kanban"
import { useState, useRef, useEffect, type ReactNode, useCallback, useMemo } from "react"

interface KanbanProps {
    data: KanbanBoardModel
}

export function Kanban({ data }: KanbanProps): ReactNode {
    const [kanbanData, setKanbanData] = useState<KanbanBoardModel>(data)
    const [selectedCard, setSelectedCard] = useState<null | string>(null)
    const kanbanRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!kanbanRef.current) return

            if (!kanbanRef.current.contains(event.target as Node)) {
                setSelectedCard(null)
            }
        }

        document.addEventListener("pointerdown", handleClickOutside)

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside)
        }
    }, [])

    const handleSelectCard = useCallback((id: string) => {
        setSelectedCard((prev) => (prev === id ? null : id))
    }, [])

    const selectedCardData = useMemo(
        () => kanbanData.cards.find((card) => card.id === selectedCard),
        [kanbanData]
    )

    const handleDeleteCard = useCallback(() => {
        if (!selectedCard) return
        setKanbanData((prev) => ({
            ...prev,
            cards: prev.cards.filter((c) => c.id !== selectedCard),
        }))
        setSelectedCard(null)
    }, [selectedCard])

    const handleMoveCard = useCallback((status: KanbanStatus) => {
        if (!selectedCard) return

        setKanbanData((prev) => ({
            ...prev,
            cards: prev.cards.map((card) =>
                card.id === selectedCard ? { ...card, status } : card
            ),
        }))
    }, [selectedCard])

    return (
        <section
            className={styles.kanban}
            ref={kanbanRef}
            onClick={() => setSelectedCard(null)}>
            <KanbanHeader
                title={kanbanData.title}
                selectedCardId={selectedCard}
                onDeleteCard={handleDeleteCard}
                onMoveCard={handleMoveCard}
                selectedCardStatus={selectedCardData?.status ?? null}
            />
            <KanbanBoards
                kanbanData={kanbanData}
                onSelectCard={handleSelectCard}
                selectedCard={selectedCard}
            />
        </section>
    )
}
