function Table({handleDelete, sourceList}){

return(    
    <div>
        {sourceList.map((SOURCE, index)=> (
            <TableItem index ={index} name ={SOURCE.theName} email = {SOURCE.theEmail} handleDelete={handleDelete}/>
        ))}
    </div>
);
}

export default Table;

function TableItem({index, name, email, handleDelete}){
    return (
    <div className="containerBox">
       <div className="number">
           <h2>{index + 1}</h2>
       </div>
       <div className="name">
           <h2>{name}</h2>
       </div>
       <div className="email">
           <div>{email}</div>
       </div>
       <button className="deletebutton" onClick={() => handleDelete(index)}>
           <div>DELETE</div>
       </button>
     </div>
    )
}