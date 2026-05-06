import { useEffect, useRef, useState, type ReactNode } from "react"
import styles from "./AddCardForm.module.css"
import { Button } from "../Button/Button"
import type { KanbanStatus } from "../../types/kanban"
import useKanban from "../../context/KanbanContext/useKanban"
import { toast } from "react-toastify"
import clsx from "clsx"

interface AddCardFormProps {
    isOpen: boolean
    onClose: () => void
}

export function AddCardForm({ isOpen, onClose }: AddCardFormProps): ReactNode {
    const [text, setText] = useState("")
    const [status, setStatus] = useState<KanbanStatus>("todo")
    const [error, setError] = useState<string | null>(null)
    const { dispatch } = useKanban()
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (isOpen && textareaRef.current) {
            textareaRef.current.focus()
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose()
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [isOpen, onClose])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
        if (error) setError(null)
    }

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as KanbanStatus)
    }

    const validateForm = (): boolean => {
        if (text.trim().length === 0) {
            setError("Task description is required")
            return false
        }
        if (text.trim().length < 3) {
            setError("Task description must be at least 3 characters")
            return false
        }
        if (text.trim().length > 200) {
            setError("Task description must be less than 200 characters")
            return false
        }
        return true
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        dispatch({
            type: "ADD_CARD",
            payload: { text: text.trim(), status },
        })

        setText("")
        setStatus("todo")
        setError(null)
        onClose()

        toast.success("New task added successfully")
    }

    return (
        <div className={clsx(styles.overlay)} onClick={onClose}>
            <form
                className={clsx(styles["add-card-form"])}
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()}>
                <textarea
                    placeholder="Enter task description..."
                    ref={textareaRef}
                    rows={3}
                    value={text}
                    onChange={handleTextChange}
                />
                <div className={clsx(styles["status-select"])}>
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="todo"
                            checked={status === "todo"}
                            onChange={handleStatusChange}
                        />
                        <span>To Do</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="doing"
                            checked={status === "doing"}
                            onChange={handleStatusChange}
                        />
                        <span>Doing</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="done"
                            checked={status === "done"}
                            onChange={handleStatusChange}
                        />
                        <span>Done</span>
                    </label>
                </div>
                {error && <div className={clsx(styles.error)}>{error}</div>}
                <Button type="submit" variant="primary" style={{ paddingBlock: ".6rem" }}>
                    Add Card
                </Button>
            </form>
        </div>
    )
}
