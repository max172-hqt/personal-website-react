import { Routes, Route } from 'react-router'
import Home from './routes/Home'
import Resume from './routes/Resume'
import Projects from './routes/Projects'
import NotFound from './routes/NotFound'

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
