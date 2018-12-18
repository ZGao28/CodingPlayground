

class IndecisionApp extends React.Component {
    render(){
        const appData = {
            title: 'IndecisionApp',
            subtitle: 'Put your life in the hands of a computer',
            options: ['read book', 'clean room']
        }   
        return(
            <div>
                <Header title={appData.title} subtitle={appData.subtitle}/>
                <Action/>
                <Options options={appData.options}/>
                <AddOption/>
            </div>
        );
    }
}


class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title ? this.props.title : 'No Current Title'}</h1>
                <h2>{this.props.subtitle ? this.props.subtitle : 'No Current Subtitle'}</h2>
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
    constructor(props){
        super(props);
        this.performSubmit = this.performSubmit.bind(this);
    }
    performSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option){
            alert(option);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.performSubmit}>
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
                {this.props.options.map((option) => <Option key={option} description={option}/>)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <p>
                {this.props.description}
            </p>
        );
    }
}



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));