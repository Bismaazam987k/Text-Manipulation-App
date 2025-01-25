// import React, { useState } from 'react';

// const TodoList = () => {
//   const [todoList, setTodoList] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   const handleAddItem = (newItem) => {
//     setTodoList([...todoList, newItem]);
//   };

//   const handleDeleteItem = (index) => {
//     setTodoList(todoList.filter((item, i) => i !== index));
//   };

//   const handleEditItem = (index, newItem) => {
//     setTodoList(todoList.map((item, i) => i === index ? newItem : item));
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <ul>
//         {todoList.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleDeleteItem(index)}>Delete</button>
//             <button onClick={() => handleEditItem(index, prompt("Edit item:"))}>
//               Edit
//             </button>
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder="Add new item"
//       />
//       <button onClick={() => handleAddItem(newItem)}>Add</button>
//     </div>
//   );
// };

// export default TodoList;