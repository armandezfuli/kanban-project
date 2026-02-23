import { type ReactNode, type ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"

type Props = {
    children: ReactNode
    variant?: "primary" | "danger" | "login"
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, variant = "primary" }: Props) {
    return (
        <button
            className={`
                ${styles.button}
                ${variant === "danger" ? styles.danger : ""}
                ${variant === "login" ? styles.login : ""}
      `}>
            {children}
        </button>
    )
}
