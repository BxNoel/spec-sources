import logo from './logo.svg';
import './App.css';
import Table from './Componets/Table';


function App() {
  return (
    <div>

    
    <div className="sourceBox">
        <div className="sourceName">
            <p>Source Name: </p>
            <input class="sourceInfo" type="text" id="name"></input>
        </div>
        <div className="sourceEmail">
            <p>Source Email: </p>
            <input className="sourceInfo" type="text" id="name"></input>
        </div>
        <button className="addbutton">ADD</button>
    </div>

    {/* This is the Table */}
    <Table/>


    </div>
    
  
  );
}

export default App;
