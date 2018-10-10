import * as React from 'react';

import './header.scss';

const Header: React.StatelessComponent<{}> = () => {
  return (
    <header className="header">
      <h1 className="header__text">To Do yourself!</h1>
    </header>
  );
}

export default Header;