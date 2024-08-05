import React from 'react';
import Map from './components/Map';
import './App.css';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-4/5 h-4/5">
        <Map />
      </div>
    </div>
  );
}

export default App;
