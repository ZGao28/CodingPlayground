import React from 'react';

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: false
        }
    }

    addOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.add(option);
        if (error) {
            this.setState({error: true});
        } else {
            this.setState({error: false});
        }
        e.target.elements.option.value = '';
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                    {this.state.error && <h4>There was an error in submitting the option (check to make sure the option doesnt already exist)</h4>}
                </form>
            </div>
        );
    }
}
