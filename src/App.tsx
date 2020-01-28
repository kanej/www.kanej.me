import React from 'react'
import './App.css'
import IpfsRouter from 'ipfs-react-router'
import Layout from './components/layout'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/index'
import AboutPage from './pages/about'

const App: React.FC = () => {
  return (
    <div className="App">
      <IpfsRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Layout>
      </IpfsRouter>
    </div>
  )
}

export default App
