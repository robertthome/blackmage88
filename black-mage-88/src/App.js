import './App.css'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

import Nav from './component/Nav'
import Socials from './component/Socials'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videos" />
        <Route path="./albums" />
        <Route path="./contact" />
        <Route path="./quote" />
      </Switch>
      <div className="main-socials">
        <Socials />
      </div>
    </div>
  )
}

export default App
