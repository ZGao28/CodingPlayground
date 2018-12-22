


const appElement = document.getElementById('app');

let visible = false;

const toggleVisibility = () => {
    visible = !visible;
    render();
}

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility(){
        if (this.state.visible){
            this.setState({
                visible: false
            });
        } else {
            this.setState({
                visible: true
            });
        }
    }
    render(){
        return (
            <div>
                <h1>
                    Visibility Toggle
                </h1> 
                <button onClick={this.toggleVisibility}>
                    {this.state.visible ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visible ? <h5>Here are some details</h5> : false}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle></VisibilityToggle>, document.getElementById('app'));








/*
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
*/