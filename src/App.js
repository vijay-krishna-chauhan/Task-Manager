// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import TaskDetail from './components/TaskDetail';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" component={TaskList} />
//           <Route path="/new" component={TaskForm} />
//           <Route path="/edit/:id" component={TaskForm} />
//           <Route path="/task/:id" component={TaskDetail} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
