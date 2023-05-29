import { useSelector } from "react-redux";

const TodoCompleted = () => {
  const completedTodos = useSelector((state: any) =>
    state.todos.filter((todo: any) => todo.completed === true)
  );
  const totalTodos = useSelector((state: any) =>
    state.todos.filter((todo: any) => todo)
  );

  return (
    <div>
      <h4 className="my-3 text-lg">
        Todos Completed: {completedTodos.length}/{totalTodos.length}
      </h4>
    </div>
  );
};

export default TodoCompleted;
