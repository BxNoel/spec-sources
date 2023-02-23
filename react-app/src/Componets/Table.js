function Table(){

    const sourceList = [{theName:"Presbo" , theEmail:"presbo@columbia.edu"},
                        {theName:"John Jay Mouse", theEmail:"mouse@columbia.edu"},
                        {theName:"Water Bottle Man", theEmail:"flipper@columbia.edu"}]

return(    
    <div>
        {sourceList.map((SOURCE, index)=> (
            <TableItem index ={index + 1} name ={SOURCE.theName} email = {SOURCE.theEmail} />
        ))}
    </div>
);
}

export default Table;

function TableItem({index, name, email}){
    return (
    <div className="containerBox">
       <div className="number">
           <h2>{index}</h2>
       </div>
       <div className="name">
           <h2>{name}</h2>
       </div>
       <div className="email">
           <div>{email}</div>
       </div>
       <button className="deletebutton">
           <div> DELETE</div>
       </button>
     </div>
    )
}