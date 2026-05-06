import styles from "./Kanban.module.css"
import { KanbanHeader } from "../KanbanHeader/KanbanHeader"
import { KanbanBoards } from "../KanbanBoards/KanbanBoards"
import { type ReactNode } from "react"
import clsx from "clsx"

export function Kanban(): ReactNode {
    return (
        <section className={clsx(styles.kanban)}>
            <KanbanHeader />
            <KanbanBoards />
        </section>
    )
}
