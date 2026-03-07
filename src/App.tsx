import type { ReactNode } from "react"
import { Header } from "./components/Header/Header"
import { Kanban } from "./components/Kanban/Kanban"
import { data } from "./data/data"

function App(): ReactNode {
    return (
        <>
            <Header />
            <main className="layout">
                <Kanban data={data} />
            </main>
        </>
    )
}

export default App
