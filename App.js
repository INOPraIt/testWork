import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route 
        path={"/"} 
        element={<Home />} 
      />
      <Route 
        path={"/example"} // this example is needed to show switching links to different colors
        element={<Home />} 
      />
    </Routes>
  )

}

export default App;