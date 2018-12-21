import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import React from 'react';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: [],
            selectedOption: undefined
        }
        this.resetOptions = this.resetOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.makeChoice = this.makeChoice.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    closeModal(){
        this.setState(()=>({selectedOption: undefined}));
    }

    makeChoice(){
        const randomNumber = Math.floor(Math.random()*this.state.options.length);
        this.setState(()=>({selectedOption: this.state.options[randomNumber]}));
    }

    addOption(option){
        if (option && !this.state.options.includes(option)){
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
            return false;
        }
        return true;
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
                <OptionModal closeModal={this.closeModal} selectedOption={this.state.selectedOption}></OptionModal>
            </div>
        );
    }
}

export default IndecisionApp;
