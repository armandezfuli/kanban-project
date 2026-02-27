import styles from "./Kanban.module.css"
import { KanbanHeader } from "../KanbanHeader/KanbanHeader"
import { KanbanBoards } from "../KanbanBoards/KanbanBoards"
import type { KanbanBoardModel } from "../../types/kanban"
import { useState } from "react"

type KanbanProps = {
    data: KanbanBoardModel
}

export function Kanban({ data }: KanbanProps) {
    const [kanbanData, _] = useState<KanbanBoardModel>(data)

    return (
        <section className={styles.kanban}>
            <KanbanHeader title={kanbanData.title} />
            <KanbanBoards kanbanData={kanbanData} />
        </section>
    )
}
