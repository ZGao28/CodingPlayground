class IndecisionApp extends React.Component {
    render(){
        return(
            <div>
                <Header></Header>
                <Action></Action>
                <Options></Options>
                <AddOption></AddOption>
            </div>
        );
    }
}


class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );      
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button> What should I do? </button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option></Option>
                <Option></Option>
                <Option></Option>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <p>Option One</p>
        );
    }
}



ReactDOM.render(<IndecisionApp></IndecisionApp>, document.getElementById('app'));