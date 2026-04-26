import styles from "./KanbanHeader.module.css"
import { Button } from "../Button/Button"
import type { ReactNode } from "react"
import useKanban from "../../context/KanbanContext/useKanban"
import { useSelectedId } from "../../context/KanbanContext/SelectedIdContext"
import { Flip, toast } from "react-toastify"
import { FiTrash2 } from "react-icons/fi"

export function KanbanHeader(): ReactNode {
    const { kanbanData, dispatch } = useKanban()
    const { selectedId, setSelectedId } = useSelectedId()

    const selectedCard = selectedId
        ? kanbanData.cards.find((card) => card.id === selectedId)
        : undefined

    const handleMoveCard = (status: "todo" | "doing" | "done", statusName: string) => {
        if (!selectedId) return
        dispatch({ type: "MOVE_CARD", payload: { id: selectedId, status } })
        toast.info(`Card moved to ${statusName}`, {
            transition: Flip,
        })
    }

    const handleDeleteCard = () => {
        if (!selectedId) return
        dispatch({ type: "DELETE_CARD", payload: { id: selectedId } })
        toast.success("Card deleted successfully", {
            transition: Flip,
        })
        setSelectedId(undefined)
    }

    return (
        <header className={styles.header}>
            <div className={styles.title}>{kanbanData.title}</div>
            <div className={styles.controls}>
                <Button
                    disabled={!selectedId || selectedCard?.status === "todo"}
                    onClick={() => handleMoveCard("todo", "Todo")}>
                    To Do
                </Button>

                <Button
                    disabled={!selectedId || selectedCard?.status === "doing"}
                    onClick={() => handleMoveCard("doing", "Doing")}>
                    Doing
                </Button>

                <Button
                    disabled={!selectedId || selectedCard?.status === "done"}
                    onClick={() => handleMoveCard("done", "Done")}>
                    Done
                </Button>

                <Button
                    variant="icon"
                    disabled={!selectedId}
                    icon={<FiTrash2 />}
                    onClick={handleDeleteCard}
                />
            </div>
        </header>
    )
}
