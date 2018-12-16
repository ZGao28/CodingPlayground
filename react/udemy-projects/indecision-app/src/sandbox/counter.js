let count = 0;

const reset = () => {
    count = 0;
    renderApp();
}

const addOne = () => {
    count++;
    renderApp();
}

const minusOne = () => {
    count--;
    renderApp();
}


const renderApp = () => {
    let appElement = document.getElementById('app');
    const templateTwo = (
        <div>
            <h1>
                Count: {count}
            </h1>
            <button onClick={addOne}> Add One </button>
            <button onClick={minusOne}> Minus One </button>
            <button onClick={reset}> Reset </button>
        </div>
    );
    ReactDOM.render(templateTwo, appElement);
}

renderApp();