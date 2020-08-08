import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    //Convention BEM al CSS class names are lowercase
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Centerbar */}
      <Feed />
      {/* Widgetsbar */}
    </div>
  );
}

export default App;
