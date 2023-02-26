import React, {useState} from 'react';

function Form({handleAdd}) {
    const [sourceName, setSourceName] = useState("");
    const [sourceEmail, setSourceEmail] = useState("")

    return (
        <form class="Form">
            <div class="source-info">
                <p>Source Name: </p>
            </div>
            <input class="form-input" type="text" id="name" onChange={(e) => setSourceName(e.target.value)}></input>
            <div class="source-info">
                <p>Source Email: </p>
            </div>
            <input class="form-input" type="text" id="name" onChange={(e) => setSourceEmail(e.target.value)}></input>
            <button class="form-button" type='button' onClick={() => handleAdd(sourceName, sourceEmail)}>ADD</button>
        </form>
    );
}

export default Form;