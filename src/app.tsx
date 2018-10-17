import * as React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import Header from 'components/header';
import MainPage from 'pages/mainPage';
import { store } from 'store';
import apolloClient from 'apolloClient';

import './styles/app.scss';

const App: React.StatelessComponent<{}> = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <div className='container-fluid'>
          <Header/>
          <MainPage/>
        </div>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
