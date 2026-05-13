import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <p className="text-gray-500 text-lg">No tasks yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
