import logo from './Components/logo.png';
import './App.css';
import Form from './Components/Form';
import React, {useState} from 'react';
import Table from './Components/Table';

const initialList = [{theName:"Presbo" , theEmail:"presbo@columbia.edu"},
                    {theName:"John Jay Mouse", theEmail:"mouse@columbia.edu"},
                    {theName:"Water Bottle Man", theEmail:"flipper@columbia.edu"}]

function App() {

  const [sourceList, setSourceList] = useState(initialList);

  function handleAdd(sourceName, sourceEmail) {
    const updatedList = [...sourceList, {theName: sourceName, theEmail: sourceEmail}]
    setSourceList(updatedList);
  }

  function handleDelete(index){
    const updatedList = sourceList.slice(0, index).concat(sourceList.slice(index+1))
    setSourceList(updatedList)
  }
  

  return (

    <div className="App">
        <img src={logo} alt="logo" className='App-logo'/>
        <div class="Header">
          <h1>Spectator's Sources</h1>
        </div>
        <Form handleAdd={handleAdd}></Form>
        <Table handleDelete={handleDelete} sourceList={sourceList}></Table>
    </div>
  );
}

export default App;
