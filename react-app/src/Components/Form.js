function Form() {
    return (
        <div class="sourceBox">
            <div class="sourceName">
                 <p>Source Name: </p>
                <input class="sourceInfo" type="text" id="name"></input>
            </div>
             <div class="sourceEmail">
                <p>Source Email: </p>
                <input class="sourceInfo" type="text" id="name"></input>
            </div>
            <button class="addbutton">ADD</button>
        </div>
    );
}

export default Form;