import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";

const TodoBody = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = (newTodo) => {
    setTodo((prev) => [...prev, newTodo]);
    console.log(todo, "todo");
  };
  const toggleTodo = (id) => {
    console.log(id, "id");

    setTodo((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
    });
    console.log(JSON.stringify(todo));
  };
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Todo List
          </h3>
          <TodoInput addTodo={addTodo} />
          <TodoList
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
          <TodoStats todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default TodoBody;
