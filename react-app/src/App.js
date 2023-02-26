import logo from './Components/logo.png';
import './App.css';
import Form from './Components/Form';
import React, {useState} from 'react';
import Table from './Components/Table';

const initialList = [{sourceName: 'Presbo', sourceEmail: 'presbo@columbia.edu'}, {sourceName: 'John Jay Mouse', sourceEmail: 'mouse@columbia.edu'}]

function App() {
  const [sourceList, setSourceList] = useState(initialList);
  function handleAdd(sourceName, sourceEmail) {
    const updatedList = [...sourceList, {sourceName: sourceName, sourceEmail: sourceEmail}]
    setSourceList(updatedList);
  }
  return (
    <div className="App">
        <img src={logo} alt="logo" className='App-logo'/>
        <div class="Header">
          <h1>Spectator's Sources</h1>
        </div>
        <Form handleAdd={handleAdd}></Form>
        <Table/>
    </div>
  );
}

export default App;
