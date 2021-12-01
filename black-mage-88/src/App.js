import './App.css'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

import Nav from './component/Nav'
import Socials from './component/Socials'
import Title from './component/Title'

function App() {
  return (
    <div className="App">
      <Nav />
      <Title />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videos" />
        <Route path="./albums" />
        <Route path="./contact" />
      </Switch>
      <div className="main-socials">
        <Socials />
      </div>
    </div>
  )
}

export default App
