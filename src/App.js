import React from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Counter from "./Counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
