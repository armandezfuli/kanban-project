import { Button } from "../Button/Button"
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.brand}>Kanban project</div>
                {/* <div className={styles.user}>Arman</div> */}
                <Button variant="login">Login</Button>
            </nav>
        </header>
    )
}
