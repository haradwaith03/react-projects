import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas"
import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import "./assets/App.css"
import "./assets/index.css"
import { render } from "react-dom";

class App extends Component {

  constructor(){
    super();
    this.state={
      notes:[]
    };
  }
  createNote(title, text) {
    const newNote = {title, text}
    const newNoteArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNoteArray
    }
    this.setState(newState)
  };


  render() {
    return (
      <section className="conteudo">

        <RegistrationForm createNote={this.createNote.bind(this)} />
        <ListaDeNotas notes={this.state.notes} />

      </section>
    );
  }
}

export default App;
