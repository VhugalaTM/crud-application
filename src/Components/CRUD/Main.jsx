import React from 'react';
import Display from './Display';
import './crud.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Edit from './Edit';

function Main() {
  return (
    <div>
        <h5>REACT CRUD APPLICATION</h5>
        <BrowserRouter>
            <Routes>
                <Route index element={<Display/>}/>
                <Route path="user/:id/edit" element={<Edit/>}></Route>
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default Main;
