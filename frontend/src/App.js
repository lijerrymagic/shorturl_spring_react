import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Result from './Result';
import NotFoundPage from './NotFoundPage';
import CountResult from './CountResult';
function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/count/:shortUrl" element={<CountResult />} /> */
        <Route path="/*" element={<NotFoundPage />} /> */
      </Routes>
    </BrowserRouter>
    );
}

export default App;
