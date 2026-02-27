import { type ReactNode, type ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: "primary" | "danger" | "login"
}

export function Button({ children, variant = "primary", ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={`
                ${styles.button}
                ${variant === "danger" ? styles.danger : ""}
                ${variant === "login" ? styles.login : ""}
      `}>
            {children}
        </button>
    )
}
