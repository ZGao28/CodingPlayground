// Sample react component



let appElement = document.getElementById('app');


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
    displayOptions(){
        return this.options.map((option)=> <li key={this.options.indexOf(option)}>{option}</li>);
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        render();
    }
}

const removeAll = () => {
    app.options = [];
    render();
}


const makeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
}


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'Currently you have no options'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}> Make Decision </button>
            <button onClick={removeAll}> Remove All </button>
            <ol>
                {app.displayOptions()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appElement);
}

render();
