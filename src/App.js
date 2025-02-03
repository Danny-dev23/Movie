import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import routes from './router.js';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;