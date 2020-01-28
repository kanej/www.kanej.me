import React from 'react'
import './App.css'
import IpfsRouter from 'ipfs-react-router'
import Layout from './components/layout'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/index'
import AboutPage from './pages/about'
import TalksPage from './pages/talks'
import { ScribalousProvider } from '@scribalous/react-hooks'

const App: React.FC = () => {
  return (
    <div className="App">
      <ScribalousProvider>
        <IpfsRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/about">
                <AboutPage />
              </Route>
              <Route exact path="/talks">
                <TalksPage />
              </Route>
            </Switch>
          </Layout>
        </IpfsRouter>
      </ScribalousProvider>
    </div>
  )
}

export default App
