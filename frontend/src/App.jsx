import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import Navigation from './components/navigation';
import Notification from './containers/notification';
import ExpensesPage from './containers/expenses-page';
import I18nProvider from './containers/i18n-provider';

export default () => (
  <Provider store={store}>
    <I18nProvider>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/expenses/:id" component={ExpensesPage} />
          <Route path="/" component={ExpensesPage} />
        </Switch>
      </Router>
      <Notification />
    </I18nProvider>
  </Provider>
);
