import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import productApi from "./api/productApi";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, [])
  return (
    <div>
      <h1>React hook - Clock</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Hero name="Easy Frontend" />
      <Link to="/home">Todos</Link>
      <Route path="/home" component={HomePage} />
    </div>
  );
}

export default App;
