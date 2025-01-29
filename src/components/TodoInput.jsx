import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");
  const handleClick = () => {
    if (inputText.trim()) {
      const newTodo = {
        id: Date.now(), // Unique ID (you can use a better method for real apps)
        text: inputText,
        completed: false, // Default to not completed
      };
      addTodo(newTodo);
      setInputText("");
    }
  };
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
