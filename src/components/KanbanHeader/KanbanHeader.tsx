import styles from "./KanbanHeader.module.css"
import { Button } from "../Button/Button"
import type { ReactNode } from "react"
import useKanban from "../../context/KanbanContext/useKanban"
import { useSelectedId } from "../../context/KanbanContext/SelectedIdContext"

export function KanbanHeader(): ReactNode {
    const { kanbanData, dispatch } = useKanban()
    const { selectedId, setSelectedId } = useSelectedId()

    const selectedCard = selectedId
        ? kanbanData.cards.find((card) => card.id === selectedId)
        : undefined

    return (
        <header className={styles.header}>
            <div className={styles.title}>{kanbanData.title}</div>
            <div className={styles.controls}>
                <Button
                    disabled={!selectedId || selectedCard?.status === "todo"}
                    onClick={() => {
                        if (selectedId) {
                            dispatch({
                                type: "MOVE_CARD",
                                payload: { id: selectedId, status: "todo" },
                            })
                        }
                    }}>
                    To Do
                </Button>

                <Button
                    disabled={!selectedId || selectedCard?.status === "doing"}
                    onClick={() => {
                        if (selectedId) {
                            dispatch({
                                type: "MOVE_CARD",
                                payload: { id: selectedId, status: "doing" },
                            })
                        }
                    }}>
                    Doing
                </Button>

                <Button
                    disabled={!selectedId || selectedCard?.status === "done"}
                    onClick={() => {
                        if (selectedId) {
                            dispatch({
                                type: "MOVE_CARD",
                                payload: { id: selectedId, status: "done" },
                            })
                        }
                    }}>
                    Done
                </Button>

                <Button
                    variant="danger"
                    disabled={!selectedId}
                    onClick={() => {
                        if (selectedId) {
                            dispatch({
                                type: "DELETE_CARD",
                                payload: { id: selectedId },
                            })
                            setSelectedId(undefined)
                        }
                    }}>
                    Delete
                </Button>
            </div>
        </header>
    )
}
