import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import productApi from "./api/productApi";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     }
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   }
  //   fetchProducts();
  // }, [])

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log("Form submit: ", formValues);
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>React hook - Clock</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Easy Frontend" />
      <Link to="/home">Todos</Link>
      <Route path="/home" component={HomePage} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
