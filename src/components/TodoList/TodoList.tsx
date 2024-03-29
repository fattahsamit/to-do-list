import { useAppSelector } from "../../redux/store";
import TodoItem from "../TodoItem/TodoItem";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);

  // Dummy List
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: true },
  // ];

  return (
    <ul className="text-xl w-full md:w-1/3 mx-auto">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
