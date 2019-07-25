import React from 'react';
import { Provider } from 'react-redux';
import ToDo from './components/ToDo';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}

export default App;
