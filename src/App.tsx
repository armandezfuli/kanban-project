import { Header } from "./components/Header/Header"
import { Kanban } from "./components/Kanban/Kanban"

function App() {
    return (
        <>
            <Header />
            <main className="layout">
                <Kanban />
            </main>
        </>
    )
}

export default App
