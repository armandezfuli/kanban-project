import styles from "./KanbanHeader.module.css"
import { Button } from "../Button/Button"

type KanbanHeaderProps = {
    title: string
}

export function KanbanHeader({ title }: KanbanHeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.controls}>
                <Button>To Do</Button>
                <Button>Doing</Button>
                <Button disabled >Done</Button>
                <Button variant="danger">Delete</Button>
            </div>
        </header>
    )
}
