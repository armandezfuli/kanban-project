import styles from "./KanbanHeader.module.css"
import { Button } from "../Button/Button"
import { useState, type ReactNode } from "react"
import useKanban from "../../context/KanbanContext/useKanban"
import { BsPlusSquare } from "react-icons/bs"
import { AddCardForm } from "../AddCardForm/AddCardForm"
import clsx from "clsx"

export function KanbanHeader(): ReactNode {
    const { kanbanData } = useKanban()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.title)}>{kanbanData.title}</div>
            <div className={clsx(styles.controls)}>
                <Button
                    variant="icon"
                    className=""
                    icon={<BsPlusSquare />}
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <AddCardForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
    )
}
