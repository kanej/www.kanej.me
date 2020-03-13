import React from 'react'
import IpfsRouter from 'ipfs-react-router'
import Layout from './components/layout'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/index'
import AboutPage from './pages/about'
import TalksPage from './pages/talks'
import PostsPage from './pages/posts'
import PostPage from './pages/post'
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
              <Route exact path="/posts">
                <PostsPage />
              </Route>
              <Route exact path="/posts/:slug">
                <PostPage />
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
