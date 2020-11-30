import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'


import VorteexAnimation from './components/VorteexAnimation'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'

import LogoWhite from './images/logo-white.svg'
import './css/tailwind.css'
import './css/main.css'


function App() {
  return (
    <Router>
      <VorteexAnimation />
      <div className="flex flex-wrap h-full bg-black justify-center">
        <div className="flex p-5 h-16 w-full">
          <Link className="h-full" to="/">
            <img className="h-full" src={LogoWhite} alt="Vorteex Logo"/>
          </Link>

          <div className="w-full text-white">
            <ul className="navigation grid grid-cols-2 w-36 float-right text-center">
              <Link to="/about-us">
                <li>About Us</li>
              </Link>
              <Link to="/pricing">
                <li>Pricing</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center">
          <Switch>
            <Route path="/about-us" component={AboutUs} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
