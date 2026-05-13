import React from 'react';

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={() => onToggleTodo(todo.id)}
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
              todo.completed
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500'
                : 'border-gray-300 hover:border-purple-400'
            }`}
          >
            {todo.completed && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </button>
          
          <div className="flex-1">
            <p
              className={`text-gray-800 transition-all duration-200 ${
                todo.completed
                  ? 'line-through text-gray-400'
                  : 'text-gray-800'
              }`}
            >
              {todo.text}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {formatDate(todo.createdAt)}
            </p>
          </div>
        </div>
        
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all duration-200 p-2 hover:bg-red-50 rounded-lg"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
