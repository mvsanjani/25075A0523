import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
            <h1 className="text-3xl font-bold text-center mb-2">TODO Application</h1>
            <p className="text-center opacity-90">
              {completedCount} of {totalCount} tasks completed
            </p>
          </div>
          
          <div className="p-6">
            <AddTodo onAddTodo={addTodo} />
            
            <TodoList
              todos={todos}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
            
            {totalCount > 0 && (
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {totalCount - completedCount} {totalCount - completedCount === 1 ? 'task' : 'tasks'} remaining
                </span>
                {completedCount > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
                  >
                    Clear completed
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
