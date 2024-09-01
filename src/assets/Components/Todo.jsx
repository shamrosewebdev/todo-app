// import React from "react";
// import "../../index.css";
// import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { FaRegEdit } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaSave } from "react-icons/fa";


// export default function Todo() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [showFinish, setShowFinish] = useState(true)

//   useEffect(() => {
//   let todoString=localStorage.getItem("todos")
//     if(todoString!==0){
//       let todos=JSON.parse(localStorage.getItem("todos"))
//       setTodos(todos)
//     }
//   }, [])
  
  
//   const handleSave = () => {
//     setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
//     setTodo("");
//     saveTLS();
//   };
//   // useEffect(() => {
//   //   console.log(todos);
//   // }, [todos]);

//   const handleEdit = (e, id) => {
//     let t=todos.filter((item)=>{return item.id===id})
//     setTodo(t[0].todo)
//     let newTodos = todos.filter((item) => {
//       return item.id !== id;
//     });
//     setTodos(newTodos);
//     saveTLS();
//   };

//   const handleDelete = (e, id) => {
//     let newTodos = todos.filter((item) => {
//       return item.id !== id;
//     });
//     setTodos(newTodos);
//     saveTLS();
//   };

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handleCheckbox = (e) => {
//     let id = e.target.name;
//     let index = todos.findIndex((elem) => {
//       return elem.id === id;
//       saveTLS();
//     });
//     let newTodos = [...todos];
//     let stat = (newTodos[index].isCompleted = !newTodos[index].isCompleted);
//     setTodos(newTodos);
//   };
//   const saveTLS=()=>{
//     localStorage.setItem("todos",JSON.stringify(todos));}

//   const toggleShowFinish=()=>{
//     setShowFinish(!showFinish);
//   }

//   return (
//     <>
//       <div className="container-fluid my-4 app-container py-2">
//         <h2 className="p-3 text-1 text-center">Add Your Todos Here</h2>
//         <div className="input">
//           <input
//             type="text"
//             className="my-2 w-100 input-area"
//             value={todo}
//             onChange={handleChange}
//           />
//           <button className="button d-flex align-items-center justify-content-center bg-pink w-100" disabled={todo===""} onClick={handleSave}>
//             <p className="m-0 mx-2">Save</p> <FaSave />
//           </button>
//         </div>
//         <div className="todos">
//           <h5 className="my-4 p-3 text-1 text-center">Your Todos</h5>
//           {todos.length>0?<div className="d-flex align-items-center"><input type="checkbox" checked={showFinish} onChange={toggleShowFinish} />
//           <p className="m-0 mx-2">Show finished items</p></div>:""}
//           {todos.length>0?todos.map((item) => {
//             return (showFinish || !item.isCompleted) && (
//               <div className="d-flex align-items-center my-4" key={item.id}>
//                 <div className="w-50 d-flex align-items-center">
//                   <input
//                     name={item.id}
//                     onChange={handleCheckbox}
//                     type="checkbox"
//                   />
//                   <p
//                     className={`m-0 mx-2 ${
//                       item.isCompleted ? "text-decoration-line-through" : " "
//                     }`}
//                   >
//                     {item.todo}
//                   </p>
//                 </div>
//                 <div className="buttons">
//                   <button className="button bg-pink mx-2" onClick={(e)=>handleEdit(e,item.id)}>
//                   <FaRegEdit />
//                   </button>
//                   <button
//                     className="button bg-pink mx-2"
//                     onClick={(e) => handleDelete(e, item.id)}
//                   >
//                     <RiDeleteBin6Line />
//                   </button>
//                 </div>
//               </div>
//             );
//           }):<p className="text-center">Hurray! You have no todos. 😀</p>}
          
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import "../../index.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaSave } from "react-icons/fa";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinish, setShowFinish] = useState(true);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const loadedTodos = JSON.parse(todoString);
      setTodos(loadedTodos);
    }
  }, []);

  // Save todos to localStorage whenever 'todos' state changes
  const saveTodosToLocalStorage = (newTodos) => {
    console.log("Saving todos to local storage:", newTodos); // Debugging line
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleSave = () => {
    const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
    setTodos(newTodos);
    setTodo("");
    saveTodosToLocalStorage(newTodos);
  };

  const handleEdit = (e, id) => {
    const t = todos.filter((item) => item.id === id);
    setTodo(t[0].todo);
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const handleDelete = (e, id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex((elem) => elem.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };

  const toggleShowFinish = () => {
    setShowFinish(!showFinish);
  };

  return (
    <>
      <div className="container-fluid my-4 app-container py-2">
        <h2 className="p-3 text-1 text-center">Add Your Todos Here</h2>
        <div className="input">
          <input
            type="text"
            className="my-2 w-100 input-area"
            value={todo}
            onChange={handleChange}
          />
          <button
            className="button d-flex align-items-center justify-content-center bg-pink w-100"
            disabled={todo === ""}
            onClick={handleSave}
          >
            <p className="m-0 mx-2">Save</p> <FaSave />
          </button>
        </div>
        <div className="todos">
          <h5 className="my-4 p-3 text-1 text-center">Your Todos</h5>
          {todos.length > 0 ? (
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={showFinish}
                onChange={toggleShowFinish}
              />
              <p className="m-0 mx-2">Show finished items</p>
            </div>
          ) : (
            ""
          )}
          {todos.length > 0 ? (
            todos.map((item) => {
              return (
                (showFinish || !item.isCompleted) && (
                  <div className="d-flex align-items-center my-4" key={item.id}>
                    <div className="w-50 d-flex align-items-center">
                      <input
                        name={item.id}
                        onChange={handleCheckbox}
                        type="checkbox"
                      />
                      <p
                        className={`m-0 mx-2 ${
                          item.isCompleted
                            ? "text-decoration-line-through"
                            : " "
                        }`}
                      >
                        {item.todo}
                      </p>
                    </div>
                    <div className="buttons">
                      <button
                        className="button bg-pink mx-2"
                        onClick={(e) => handleEdit(e, item.id)}
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        className="button bg-pink mx-2"
                        onClick={(e) => handleDelete(e, item.id)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                )
              );
            })
          ) : (
            <p className="text-center">Hurray! You have no todos. 😀</p>
          )}
        </div>
      </div>
    </>
  );
}

