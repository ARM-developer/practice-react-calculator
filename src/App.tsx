import './assets/css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Test'
import { ReactElement } from 'react'

function App(): ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
