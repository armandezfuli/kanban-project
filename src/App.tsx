import type { ReactNode } from "react"
import { Header } from "./components/Header/Header"
import { Kanban } from "./components/Kanban/Kanban"
import { data } from "./data/data"
import { KanbanProvider } from "./context/KanbanContext/KanbanProvider"

function App(): ReactNode {
    return (
        <>
            <Header />
            <main className="layout">
                <KanbanProvider initialData={data}>
                    <Kanban />
                </KanbanProvider>
            </main>
        </>
    )
}

export default App
