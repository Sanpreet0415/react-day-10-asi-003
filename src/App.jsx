import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import BookContainer from './BookContainer';

const theme = extendTheme({
  // Add custom Chakra UI theme configurations if needed
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <BookContainer />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
