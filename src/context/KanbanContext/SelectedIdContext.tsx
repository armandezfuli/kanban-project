import {
    createContext,
    useContext,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react"

interface SelectedIdContextType {
    selectedId: string | undefined
    setSelectedId: Dispatch<SetStateAction<string | undefined>>
}

const SelectedIdContext = createContext<SelectedIdContextType | undefined>(undefined)

export function SelectedIdProvider({ children }: { children: ReactNode }) {
    const [selectedId, setSelectedId] = useState<string | undefined>(undefined)

    return (
        <SelectedIdContext.Provider value={{ selectedId, setSelectedId }}>
            {children}
        </SelectedIdContext.Provider>
    )
}

export function useSelectedId() {
    const context = useContext(SelectedIdContext)
    if (context === undefined) {
        throw new Error("useSelectedId must be used within a SelectedIdProvider")
    }
    return context
}
