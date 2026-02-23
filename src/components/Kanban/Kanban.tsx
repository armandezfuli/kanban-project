import { Button } from "../Button/Button"
import styles from "./Kanban.module.css"

export function Kanban() {
    return (
        <section className={styles.kanban}>
            <header className={styles.header}>
                <div className={styles.title}>Learn English</div>

                <div className={styles.controls}>
                    <Button>To Do</Button>
                    <Button>Doing</Button>
                    <Button disabled>Done</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            </header>

            <section className={styles.board}>
                <div className={styles.column}>
                    <div className={styles["column-title"]}>To Do</div>
                    <div className={styles.cards}>
                        <div className={styles.card}>Develop Kanban project 1 Develop Kanban project 1</div>
                        <div className={styles.card}>Develop Kanban project 2</div>
                        <div className={styles.card}>Develop Kanban project 3</div>
                        <div className={styles.card}>Develop Kanban project 3</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project end</div>
                    </div>
                </div>
                <div className={styles.column}>
                <div className={styles["column-title"]}>Doing</div>
                    <div className={styles.cards}>
                        <div className={styles.card}>Develop Kanban project 1</div>
                        <div className={styles.card}>Develop Kanban project 2</div>
                        <div className={styles.card}>Develop Kanban project 3</div>
                        <div className={styles.card}>Develop Kanban project 3</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project end</div>
                    </div>
                </div>
                <div className={styles.column}>
                <div className={styles["column-title"]}>Done</div>
                    <div className={styles.cards}>
                        <div className={styles.card}>Develop Kanban project 1</div>
                        <div className={styles.card}>Develop Kanban project 2</div>
                        <div className={styles.card}>Develop Kanban project 3</div>
                        <div className={styles.card}>Develop Kanban project 3</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project</div>
                        <div className={styles.card}>Develop Kanban project end</div>
                    </div>
                </div>
            </section>
        </section>
    )
}
