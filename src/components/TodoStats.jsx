const TodoStats = ({ todo = [] }) => {
  const completedCount = todo.filter((item) => item.completed).length;
  const activeCompletedCount = todo.filter((item) => !item.completed).length;
  return (
    <div className="flex justify-between items-center text-sm text-gray-500 bg-gray-200 p-6">
      <span>{todo.length} items Remaining</span>
      <div className="space-x-4">
        <p className="hover:text-blue-500">
          <span>Completed &nbsp;</span>
          {completedCount}
        </p>
        <p className="hover:text-blue-500">
          <span>Active &nbsp;</span>
          {activeCompletedCount}
        </p>
      </div>
    </div>
  );
};

export default TodoStats;
