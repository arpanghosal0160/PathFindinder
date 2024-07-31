import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Ayush Jaiswal. All rights reserved.</p>
          <p >
            <a className='social' href="">Email</a> | 
            <a className='social' href="">Github</a> | 
            <a className='social' href="">LinkedIn</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
