// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/tasks')
//       .then(response => setTasks(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Tasks</h1>
//       <ul>
//         {tasks.map(task => (
//           <li key={task._id} className="mb-2 p-2 border rounded">
//             <h2 className="text-xl font-semibold">{task.title}</h2>
//             <p>{task.description}</p>
//             <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/tasks')
//       .then(response => setTasks(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Tasks</h1>
//       <Link to="/new" className="mb-4 inline-block bg-green-500 text-white p-2 rounded">Add New Task</Link>
//       <ul>
//         {tasks.map(task => (
//           <li key={task._id} className="mb-2 p-2 border rounded">
//             <h2 className="text-xl font-semibold">{task.title}</h2>
//             <p>{task.description}</p>
//             <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
//             <Link to={`/task/${task._id}`} className="text-blue-500">View</Link>
//             <Link to={`/edit/${task._id}`} className="ml-2 text-yellow-500">Edit</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;


// src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <Link to="/new" className="mb-4 inline-block bg-green-500 text-white p-2 rounded">Add New Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="mb-2 p-2 border rounded">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            <Link to={`/task/${task._id}`} className="text-blue-500">View</Link>
            <Link to={`/edit/${task._id}`} className="ml-2 text-yellow-500">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
