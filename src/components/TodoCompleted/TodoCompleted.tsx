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
      <h4 className="my-3 text-lg ">
        Todos Completed: {completedTodos.length}/{totalTodos.length}
      </h4>
      {completedTodos.length === totalTodos.length ? (
        <p className="text-center text-lg text-success">
          Congratulations! You have completed all your tasks.
        </p>
      ) : null}
    </>
  );
};

export default TodoCompleted;
