import './assets/css/App.css'
import { Router, Route } from 'wouter'
import Home from './pages/home'
import { ReactElement } from 'react'

function App(): ReactElement {
  return (
    <div className="m-0 bg-[#242424]">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  )
}

export default App
