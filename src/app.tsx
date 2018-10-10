import * as React from 'react';

import Header from 'components/header/header';
import MainPage from 'pages/mainPage/mainPage';

import './styles/app.scss';

const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;