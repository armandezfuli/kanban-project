import { type ReactNode, type ButtonHTMLAttributes } from "react"
import styles from "./Button.module.css"
import clsx from "clsx"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    variant?: "primary" | "danger" | "login" | "icon" | "delete"
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
            className={clsx(
                styles.button,
                variant === "danger" && styles.danger,
                variant === "login" && styles.login,
                variant === "icon" && styles.iconVariant,
                variant === "delete" && [styles.iconVariant, styles["icon-delete"]],
                icon && !children && styles.iconOnly
            )}>
            {icon && <span className={clsx(styles.icon)}>{icon}</span>}
            {children && <span className={clsx(styles.children)}>{children}</span>}
        </button>
    )
}
