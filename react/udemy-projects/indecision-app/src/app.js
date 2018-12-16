// Sample react component



let appElement = document.getElementById('app');


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['Option 1', 'Option 2']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'Currently you have no options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

ReactDOM.render(template, appElement);
