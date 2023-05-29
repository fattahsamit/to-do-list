import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoCompleted from "./components/TodoCompleted/TodoCompleted";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <main className="min-h-[calc(100vh-64px)] container mx-auto flex flex-col items-center">
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <TodoCompleted></TodoCompleted>
    </main>
  );
}

export default App;
