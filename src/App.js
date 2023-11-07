import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageLayout  from './pages/components/Home/HomePageLayout';

function App(){
  return(
  <Router>
    <Routes>
  <Route path="/" element={<HomePageLayout />} />
</Routes>
</Router>

  );
}
export default App;



