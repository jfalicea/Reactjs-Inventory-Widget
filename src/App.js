import React from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable'

function App() {
  return (
    <div className="App">
      <div className="row">
      <FilterableProductTable />
      </div>
    </div>
  );
}

export default App;



//this is a pure component.  it is JUST  a presentational component.  