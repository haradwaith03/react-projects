import React, { Component } from "react";
import "./estilo.css"

export default class RegistrationFormr extends Component {

    constructor(props){
        super(props); //Construtor do pai
        this.title = "";
        this.text = "";
    }

    _handlerNewText(evento){
        evento.stopPropagation();
        this.text = evento.target.value;
    }

    _handlerNewTitle(evento){
        evento.stopPropagation();
        this.title = evento.target.value;
    }

    _createNote(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.createNote(this.title, this.text)
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit = {this._createNote.bind(this)} 
            >
                <input 
                type="text" 
                placeholder="Title" 
                className="form-cadastro_input"
                onChange={this._handlerNewTitle.bind(this)}
                />
                
                <textarea 
                placeholder="Write your note..." 
                className="form-cadastro_input"
                onChange={this._handlerNewText.bind(this)}
                rows={15}/>

                <button className="form-cadastro_input form-cadastro_submit">Create Note</button>
            </form>
        );
    }
}