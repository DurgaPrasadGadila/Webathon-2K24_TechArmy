import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  // State for tracking attributes
  const [steps, setSteps] = useState(2000);
  const [weight, setWeight] = useState("");
  const [caloriesIntake, setCaloriesIntake] = useState("");
  const [sleepTime, setSleepTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Function to calculate calories burnt
  const calculateCaloriesBurnt = () => {
    if (!isNaN(caloriesIntake)) {
      // Assuming a simple formula: 1 calorie burnt for every 10 calories intake
      const burnt = Math.floor(caloriesIntake / 10);
      return burnt;
    }
    return 0;
  };

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="homepage">
      <div className="profile-section">
        <h2>Todo Tasks</h2>
        <p>
          <span className="fw-bold">Goals:</span> <br />
          Running, Swimming, Walking
        </p>
        <p>
          <span className="fw-bold">Food Intake:</span> <br />
          Meals, Meat, Fruits
        </p>
      </div>
      <div className="tracking-section">
        <div className="attribute">
          <label>Calories Intake:</label>
          <input
            type="number"
            value={caloriesIntake}
            onChange={(e) => setCaloriesIntake(parseInt(e.target.value))}
          />
          <button
            onClick={() =>
              alert(`Calories intake saved: ${caloriesIntake} kcal`)
            }
          >
            Save
          </button>
        </div>
        <div className="attribute">
          <label>Calories Burnt:</label>
          <p>{calculateCaloriesBurnt()}</p>
        </div>

        <div className="attribute">
          <label>To-Do:</label>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
