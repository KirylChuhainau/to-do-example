import * as React from 'react';
import { Provider } from 'react-redux';

import Header from 'components/header';
import MainPage from 'pages/mainPage';
import { store } from 'store';

import './styles/app.scss';

const App: React.StatelessComponent<{}> = () => {
  return (
    <Provider store={store}>
      <div className='container-fluid'>
        <Header/>
        <MainPage/>
      </div>
    </Provider>
  );
};

export default App;
