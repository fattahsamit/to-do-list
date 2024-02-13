import { useSelector } from "react-redux";

const TodoCompleted = () => {
  const completedTodos = useSelector((state: any) =>
    state.todos.filter((todo: any) => todo.completed === true)
  );
  const totalTodos = useSelector((state: any) =>
    state.todos.filter((todo: any) => todo)
  );

  return (
    <>
      <h4 className="my-3 text-xl font-semibold dark:text-slate-100">
        Todos Completed: {completedTodos.length}/{totalTodos.length}
      </h4>
      {completedTodos.length === totalTodos.length ? (
        <p className="text-center text-xl font-semibold text-success dark:text-primary">
          Congratulations! You have completed all your tasks.
        </p>
      ) : null}
    </>
  );
};

export default TodoCompleted;
