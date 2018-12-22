/*
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
*/

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: this.props.count
        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }

    addOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    minusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    componentDidMount(){
        try {
            const prevNumber = localStorage.getItem('count');
            const count = parseInt(prevNumber);
            if (!isNaN(count)){
                this.setState(()=>({count: count}));
            }
        } catch(e){
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }

    reset(){
        this.setState({
            count: 0
        });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'));