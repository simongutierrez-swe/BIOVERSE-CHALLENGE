import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

//components test

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<InputTodo />}>
          </Route>
          <Route exact path="/admin" element={<ListTodos />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
