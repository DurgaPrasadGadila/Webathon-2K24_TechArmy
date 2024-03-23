import "./App.css";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import HomePage2 from "./components/HomePage2";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Todo />
      <HomePage2 />
    </>
  );
}

export default App;
