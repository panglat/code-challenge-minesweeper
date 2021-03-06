import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GameSetup from 'components/app-components/GameSetup';
import GameBoard from 'components/app-components/GameBoard';
import { store } from 'store';

import './styles.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/board">
            <GameBoard />
          </Route>
          <Route path="/">
            <GameSetup />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
