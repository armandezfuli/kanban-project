import type { ReactNode } from "react"
import { Button } from "../Button/Button"
import styles from "./Header.module.css"
import clsx from "clsx"

export function Header(): ReactNode {
    return (
        <header className={clsx(styles.header)}>
            <nav className={clsx(styles.nav)}>
                <div className={clsx(styles.brand)}>Kanban project</div>
                {/* <div className={clsx(styles.user)}>Arman</div> */}
                <Button variant="login">Login</Button>
            </nav>
        </header>
    )
}
