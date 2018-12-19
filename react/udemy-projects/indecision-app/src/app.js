

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: this.props.options
        }
        this.resetOptions = this.resetOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.makeChoice = this.makeChoice.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
    }

    resetOptions(){
        this.setState(() => ({options: []}));
    }

    deleteOption(optionToDelete){
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((option)=>optionToDelete !== option)
            }
        })
    }

    makeChoice(){
        const randomNumber = Math.floor(Math.random()*this.state.options.length);
        alert(this.state.options[randomNumber]);
    }

    addOption(option){
        if (option){
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options){
                this.setState(()=>({options: options}));
            }
        } catch(e){
            console.log(e);
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
                <Options options={this.state.options} deleteOption={this.deleteOption}/>
                <AddOption add={this.addOption}/>
            </div>
        );
    }
}


IndecisionApp.defaultProps = {
    options: ['Stuff one', 'Stuff two']
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title ? props.title : 'No Current Title'}</h1>
            <h2>{props.subtitle ? props.subtitle : 'No Current Subtitle'}</h2>
        </div>
    );         
}


const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.makeChoice}>What should I do?</button>
            <button onClick={props.resetOptions}>Reset all Options</button>
        </div>
    );
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

const Options = (props) => {
    return (
        <div>
            {props.options.map((option) => <Option key={option} deleteOption={props.deleteOption} description={option}/>)}
        </div>
    );
}

const Option = (props) => {
    return(
        <p>
            {props.description}
            <button onClick={(e) => {props.deleteOption(props.description)}}>Delete Option</button>
        </p>
    ); 
}


const User = () => {
    return(
        <div>
        </div>
    );
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));