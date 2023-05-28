import "./App.css";

function App() {
  return (
    <main className="min-h-[calc(100vh-64px)] container mx-auto">
      <section className="my-10 p-6 text-center">
        <h1 className="text-4xl font-semibold">To Do List</h1>
        <div className="flex justify-center gap-3 my-5">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Add todo"
            required
            className="px-4 py-3 rounded-md border text-gray-500"
          />
          <button className="w-24 text-white font-semibold bg-primary hover:bg-violet-500 py-3 rounded-md">
            Add
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
