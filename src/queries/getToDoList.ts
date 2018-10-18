import gql from 'graphql-tag';

export default gql`
  {
    todoList(id: 1) {
      id
      todoItems {
        id
        title
      }
    }
  }
`;
