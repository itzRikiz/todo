const TodoList = ({ todo = [], toggleTodo, deleteTodo }) => {
  return (
    <div className="space-y-3">
      {todo.length == 0 ? (
        <p className="text-center text-blue-600">No Todo left</p>
      ) : (
        todo.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTodo(item.id)}
                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-700">{item.text}</span>
            </div>
            <button
              onClick={() => deleteTodo(item.id)}
              className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
