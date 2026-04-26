import { useState, type ReactNode } from "react"
import { Header } from "./components/Header/Header"
import { Kanban } from "./components/Kanban/Kanban"
import { data } from "./data/data"
import { KanbanProvider } from "./context/KanbanContext/KanbanProvider"
import { SelectedIdProvider } from "./context/KanbanContext/SelectedIdContext"
import { loadKanbanData } from "./utils/storage"
import { Flip, ToastContainer } from "react-toastify"

function App(): ReactNode {
    const [initialData] = useState(() => {
        const saved = loadKanbanData()
        return saved || data
    })

    return (
        <>
            <Header />
            <main className="layout">
                <SelectedIdProvider>
                    <KanbanProvider initialData={initialData}>
                        <Kanban />
                    </KanbanProvider>
                </SelectedIdProvider>
            </main>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                theme="dark"
                closeOnClick
                pauseOnHover
                transition={Flip}
            />
        </>
    )
}

export default App
