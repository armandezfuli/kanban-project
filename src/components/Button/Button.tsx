import { type ReactNode, type ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    variant?: "primary" | "danger" | "login" | "icon"
    icon?: ReactNode
}

export function Button({
    children,
    variant = "primary",
    icon,
    ...rest
}: ButtonProps): ReactNode {
    return (
        <button
            {...rest}
            className={`
                ${styles.button}
                ${variant === "danger" ? styles.danger : ""}
                ${variant === "login" ? styles.login : ""}
                ${variant === "icon" ? styles.iconVariant : ""} 
                ${icon && !children ? styles.iconOnly : ""}
      `}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children && <span className={styles.children}>{children}</span>}
        </button>
    )
}
