import React, { useState } from 'react';

function App() {

  const initialTasks = [
    'Study React',
    'Finish Homework',
    'Practice Coding'
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {

    if (newTask.trim() === '') {
      alert('Please enter a task.');
      return;
    }

    setTasks([...tasks, newTask]);

    setNewTask('');
  };

  const removeTask = (indexToRemove) => {

    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToRemove
    );

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '20px' }}>

      <h1>Dynamic Task List</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      {
        tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <ul>
            {
              tasks.map((task, index) => (
                <li key={index}>

                  {task}

                  <button
                    onClick={() => removeTask(index)}
                    style={{ marginLeft: '10px' }}
                  >
                    Remove
                  </button>

                </li>
              ))
            }
          </ul>
        )
      }

    </div>
  );
}

export default App;