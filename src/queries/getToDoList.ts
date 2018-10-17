import gql from 'graphql-tag';

export default gql`
  {
    todoList(id: 1) {
      id
      title
      todoItems {
        id
        title
      }
    }
  }
`;
