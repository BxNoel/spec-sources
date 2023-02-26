function Form() {
    return (
        <form class="Form">
            <div class="source-info">
                <p>Source Name: </p>
            </div>
            <input class="form-input" type="text" id="name"></input>
            <div class="source-info">
                <p>Source Email: </p>
            </div>
            <input class="form-input" type="text" id="name"></input>
            <button class="form-button">ADD</button>
        </form>
    );
}

export default Form;