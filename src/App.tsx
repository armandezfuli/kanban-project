import type { ReactNode } from "react"
import { Header } from "./components/Header/Header"
import { Kanban } from "./components/Kanban/Kanban"
import { data } from "./data/data"
import { KanbanProvider } from "./context/KanbanContext/KanbanProvider"
import { SelectedIdProvider } from "./context/KanbanContext/SelectedIdContext"

function App(): ReactNode {
    return (
        <>
            <Header />
            <main className="layout">
                <SelectedIdProvider>
                    <KanbanProvider initialData={data}>
                        <Kanban />
                    </KanbanProvider>
                </SelectedIdProvider>
            </main>
        </>
    )
}

export default App
