import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleTaskChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && currentTask.trim() !== '') {
      setTasks([...tasks, currentTask.trim()]);
      setCurrentTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask.trim()]);
      setCurrentTask('');
    }
  };

  return (
    <div className="App">
      <h1>YAPILACAKLAR</h1>
      <div>
        <input
          type="text"
          value={currentTask}
          onChange={handleTaskChange}
          onKeyDown={handleKeyPress}
          placeholder="Yapılacaklar..."
        />
        <button onClick={addTask}>Ekle</button> {/* Ekle butonu */}
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
