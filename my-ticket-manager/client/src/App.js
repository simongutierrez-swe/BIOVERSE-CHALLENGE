import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

//components test

import InputTicket from "./components/InputTicket";
import ListTickets from "./components/ListTickets";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<InputTicket />}>
          </Route>
          <Route exact path="/admin" element={<ListTickets />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
