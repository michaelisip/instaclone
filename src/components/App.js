import React from 'react';

import './App.css';
import Main from './main/main.component'
import Aside from './aside/aside.component'
import Navbar from './navbar/navbar.component'

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      <div>
        {/* main */}
        <Main />

        {/* aside */}
        <Aside />
      </div>
    </div>
  );
}

export default App;
