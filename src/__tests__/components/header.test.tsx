import * as React from 'react';
import {shallow} from 'enzyme';

import Header from 'components/header/header';

describe ('components/header tests', () => {
  it('should render as expected ', () => {
      // Arrange
      // Act
       const component = shallow(
          <Header/>
       );
      // Assert
       expect (component).toMatchSnapshot();
  });
});
