
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import bg_img from "../assets/bg_img.avif"
const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="container p-4 mx-auto bg-gradient-to-r from-sky-300 to-green-700">
      {/* <img src={bg_img} className='absolute'/> */}
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskDetail;
