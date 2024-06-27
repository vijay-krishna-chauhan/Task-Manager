
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Function to fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Function to delete a task
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks(); // Refresh the task list after deletion
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  return (
    <div className="container mx-auto pb-4 border-blue-700 border">
      <h1 className="text-2xl font-bold mb-4 bg-blue-700 p-5 flex justify-center mx-auto">Task Manager</h1>
      <div className='p-4'>
        <h2 className="text-xl font-bold mb-4 text-red-500  mx-auto">Tasks</h2>
        <Link to="/new" className="mb-4 inline-block bg-green-500 text-white p-2 rounded">Add New Task</Link>
        <ul>
          {tasks.map(task => (
            <li key={task._id} className="mb-2 p-2 border rounded border-black bg-teal-100">
              <div className='flex justify-between '>
                <h2 className="text-xl font-semibold text-blue-600">{task.title}</h2>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="ml-2 bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </div>
              <p>{task.description}</p>
              <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
              <Link to={`/task/${task._id}`} className="text-blue-500 font-bold">View</Link>
              <Link to={`/edit/${task._id}`} className="ml-2 text-yellow-500 font-bold">Edit</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
