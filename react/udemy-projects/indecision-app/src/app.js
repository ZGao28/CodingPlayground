

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: ['read book', 'clean room']
        }
        this.resetOptions = this.resetOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.makeChoice = this.makeChoice.bind(this);
    }

    resetOptions(){
        this.setState({
            options: []
        });
    }

    makeChoice(){
        const randomNumber = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomNumber]);
    }

    addOption(option){
        if (option){
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                }
            });
        }
    }

    render(){
        const appData = {
            title: 'IndecisionApp',
            subtitle: 'Put your life in the hands of a computer'
        }   
        return(
            <div>
                <Header title={appData.title} subtitle={appData.subtitle}/>
                <Action hasOptions={this.state.options.length > 0} makeChoice={this.makeChoice} resetOptions={this.resetOptions}/>
                <Options options={this.state.options}/>
                <AddOption add={this.addOption}/>
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
                <button disabled={!this.props.hasOptions} onClick={this.props.makeChoice}>What should I do?</button>
                <button onClick={this.props.resetOptions}>Reset all Options</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
    }

    addOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        this.props.add(option);
        e.target.elements.option.value = '';
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addOption}>
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