import React from 'react';
import ReactDOM from 'react-dom/client';
import Statistics from './Statistics.jsx';
import data from './data.json';



  
function App() {
  return (
    <>
    <Statistics title="Upload stats" stats={data} />
   
  </>
  );
}

export default App;