import styles from "./Kanban.module.css"
import { KanbanHeader } from "../KanbanHeader/KanbanHeader"
import { KanbanBoards } from "../KanbanBoards/KanbanBoards"
import { useEffect, useRef, type ReactNode } from "react"
import { useSelectedId } from "../../context/KanbanContext/SelectedIdContext"

export function Kanban(): ReactNode {
    const { selectedId, setSelectedId } = useSelectedId()
    const kanbanRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (kanbanRef.current && !kanbanRef.current.contains(event.target as Node)) {
                setSelectedId(undefined)
            }
        }

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape" && selectedId) {
                setSelectedId(undefined)
            }
        }

        document.addEventListener("pointerdown", handleClickOutside)
        document.addEventListener("keydown", handleEscapeKey)

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside)
            document.removeEventListener("keydown", handleEscapeKey)
        }
    }, [selectedId, setSelectedId])

    return (
        <section className={styles.kanban} ref={kanbanRef}>
            <KanbanHeader />
            <KanbanBoards />
        </section>
    )
}
