import * as React from 'react';

import ToDoListWrapper from 'containers/toDoListWrapper/toDoListWrapper';

import './mainPage.scss';

const MainPage: React.StatelessComponent<{}> = () => {
  return (
    <main className='main-page'>
      <ToDoListWrapper/>
    </main>
  );
};

export default MainPage;
