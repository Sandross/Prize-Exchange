import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Store from '../pages/Store';

export default function Router() {
  return (
    <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/store" element={ <Store/> } />
    </Routes>
  )
}
