import { useSelector } from "react-redux";
import { useAppSelector } from "../../redux/store";

const TodoCompleted = () => {
  const completedTodos = useAppSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const totalTodos = useAppSelector((state) => state.todos);

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
