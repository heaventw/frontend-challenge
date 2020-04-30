import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import HomePage from './pages/HomePage/HomePage';
import ExpensesPage from './pages/ExpensesPage/ExpensesPage';
import ExpensePage from './pages/ExpensePage/ExpensePage';

import './App.css';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route exact path='/about' component={AboutPage} /> */}
            <Route exact path='/expenses' component={ExpensesPage} />
            <Route exact path='/expenses/:id' component={ExpensePage} />
            {/* <Route exact path='/*' component={ErrorPage} /> */}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
