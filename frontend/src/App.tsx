import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import Homec from "./pages/homec"
import Chatc from "./pages/chatc"
import { Chat } from "./pages/chat/Chat"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chat" element={<Chat />}/>

        <Route path="/homec" element={<Homec />}/>
        <Route path="/chatc" element={<Chatc />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
