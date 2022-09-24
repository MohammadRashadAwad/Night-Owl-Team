import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './asset/router/AppRouter';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import ProjectDetailsPage from './pages/ProjectDetailsPage';







function App() {
  return (
      <BrowserRouter>
      <AppRouter/>
      
      </BrowserRouter>
      
      
  );
}

export default App;
