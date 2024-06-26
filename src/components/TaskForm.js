

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/tasks/${id}`)
        .then(response => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setDueDate(response.data.dueDate);
        })
        .catch(error => console.log(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, dueDate };

    if (id) {
      axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/tasks/${id}`, taskData)
        .then(() => navigate('/'))
        .catch(error => console.log(error));
    } else {
      axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/tasks`, taskData)
        .then(() => navigate('/'))
        .catch(error => console.log(error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {id ? 'Update' : 'Create'} Task
      </button>
    </form>
  );
};

export default TaskForm;
