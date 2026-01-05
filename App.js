import React from 'react';
import { Provider } from 'react-redux';
import store from './src/app/store';
import Main from './src/screen/Main';
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import Example from './src/component/Example';

// const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
