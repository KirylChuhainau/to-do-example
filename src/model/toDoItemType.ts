export interface ToDoItemEntity {
  id: number;
  isDone: boolean;
  text: string;
}

export interface ToDoItemEntityGQL {
  id: number;
  title: string;
}

export interface ToDoListEntityGQL {
  id: number;
  todoItems: ToDoItemEntityGQL[];
}

export interface GetToDoListGQL {
  todoList: ToDoListEntityGQL;
}
