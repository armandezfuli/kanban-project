import styles from "./Kanban.module.css"
import { KanbanHeader } from "../KanbanHeader/KanbanHeader"
import { KanbanBoards } from "../KanbanBoards/KanbanBoards"
import { type ReactNode } from "react"

export function Kanban(): ReactNode {
    return (
        <section className={styles.kanban}>
            <KanbanHeader />
            <KanbanBoards />
        </section>
    )
}
