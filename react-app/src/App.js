import logo from './Components/logo.png';
import './App.css';
import Form from './Components/Form';
import Table from './Componets/Table';

function App() {
  return (
    <div className="App">
    <img src={logo} alt="logo" className='App-logo'/>
    <div className="Header">
      <h1>Spectator's Sources</h1>
    </div>
    
    <Form></Form>
    
    {/* This is the Table */}
    <Table/>
    </div>
  );
}

export default App;
