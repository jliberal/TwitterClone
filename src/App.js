import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    //Convention BEM al CSS class names are lowercase
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Centerbar */}
      <Feed />
      {/* Widgetsbar */}
      <Widgets />
    </div>
  );
}

export default App;
