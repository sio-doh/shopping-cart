import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

function App() {
  // return <Container>Tinkering with Vite, React and TypeScript</Container>
  return <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Container>
}

export default App
