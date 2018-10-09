import * as React from 'react';

import ToDoList from 'components/toDoList/toDoList';

import './mainPage.scss';

const MainPage: React.StatelessComponent<{}> = () => {
  return (
    <main className="main-page">
      <ToDoList/>
    </main>
  );
}

export default MainPage;