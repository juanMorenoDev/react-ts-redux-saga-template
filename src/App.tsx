import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { history, store } from '@store'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import LoginView from '@views/loginView'
import HomeView from '@views/home'

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route strict exact path="/">
            <HomeView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </>
)
export default App
