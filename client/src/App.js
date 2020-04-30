import React from "react";
import { Provider } from "react-redux";
import Expenses from "./containers/Expenses";
import IntlProvider from "./containers/IntlProvider";
import Filter from "./containers/Filter";
import CurrentExpense from "./containers/CurrentExpense";
import Header from "./components/Header";
import store from "./store";
import { GlobalStyles } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <IntlProvider>
        <GlobalStyles />
        <Header />
        <Filter />
        <Expenses />
        <CurrentExpense />
      </IntlProvider>
    </Provider>
  );
}

export default App;
