// // frontend/src/App.js
// // Import your CSS file
// import './App.css';
// // Importing 
// import React, { useState } from 'react';

// const App = () => {
//   // State to manage the task input and added tasks
//   const [task, setTask] = useState("");
//   const [addedTasks, setAddedTasks] = useState([]);
// // Function to handle form submission

//   const submitForm = async (e) => {
//     e.preventDefault();

//     // Create a new task object from the input
//     const newTask = { task: task };

//     try {
//        // Send a POST request to the server to add the task
//       const response = await fetch('http://localhost:5000/addtask', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newTask),
//       });

//       if (response.ok) {
//         // If the request is successful, add the new task to the list of tasks
//         setAddedTasks([...addedTasks, newTask]);
//         setTask(""); // Clear the input field after adding the task
//       } else {
//         console.error('Error adding task');
//       }
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   return (
//     <>
//       <div><h2>To Do Tasks</h2></div>
//       <form action='' onSubmit={submitForm}>
//         <div>
//           {/* <label>Enter Task: </label> */}
//           <input name="task"  placeholder="Enter What You Want Add ToDo Task" value={task} onChange={(e) => setTask(e.target.value)}/>
//           <button type="submit">Add ToDo</button>
//         </div>
//       </form>
//       <div>
//         {addedTasks.map((curElem, index) => (
//           <p key={index}>
//             <span>Task: </span>
//             <span>{curElem.task}</span>
//           </p>
//         ))}
//       </div>
//     </>
//   );


// };

// export default App;

// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='container mt-5 w-50'>
            <h2 className='text-center'>ToDo-List App</h2>
        <div className='input-group'>
            <input className="form-control" type="text" placeholder="Enter What You Want Do a Task......" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            <button className='btn btn-success' onClick={addTask}>Add ToDo</button>
        </div>
        <ul className='list-group mt-4'>
            {tasks.map((task, index) => (
            <li className="list-group-item vh-5" key={index}>
                <p checked={task.completed} onChange={() => toggleTask(index)} />
                {task.text}
                <button id="delete" onClick={() => deleteTask(index)}>❌</button>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default TodoList;

