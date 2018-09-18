import React from 'react';

// React Router Integration
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Redux Integration
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux';

// Imported Screens
import { Home, About, Bookings, Sessions } from './views';

// Enable Parallax Scrolling
import { ParallaxProvider } from 'react-scroll-parallax'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ParallaxProvider>
          <Router>
            <Switch>
              <Route exact path='/sessions' component={Sessions} />
              <Route exact path='/bookings' component={Bookings} />
              <Route exact path='/miya' component={About} />
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </ParallaxProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
