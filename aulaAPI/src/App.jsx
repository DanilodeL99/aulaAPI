import {Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Pokemon from './pages/pokemon'

function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokemon</Link>
      </nav>

      <hr/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pokemon" element={<Pokemon/>} />
      </Routes>

    </div>
  )
}

export default App