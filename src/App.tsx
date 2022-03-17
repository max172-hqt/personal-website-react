import { Routes, Route } from 'react-router'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import NotFound from './routes/NotFound'

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
