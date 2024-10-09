import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import './App.scss';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
