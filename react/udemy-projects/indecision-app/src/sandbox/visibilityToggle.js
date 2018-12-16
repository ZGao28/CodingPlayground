const appElement = document.getElementById('app');

let visible = false;

const toggleVisibility = () => {
    visible = !visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>
                Visibility Toggle
            </h1> 
            <button onClick={toggleVisibility}>
                {visible ? 'Hide Details' : 'Show Details'}
            </button>
            {visible ? <h5>Here are some details</h5> : false}
        </div>
    );
    ReactDOM.render(template, appElement);
}

render();