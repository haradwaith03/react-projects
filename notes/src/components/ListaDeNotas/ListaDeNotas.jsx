import React, { Component } from "react";
import CardNote from "../cardNote/CardNote";
import "./estilo.css";

export default class ListaDeNotas extends Component {

    

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notes.map((note, index) => {
                    return (
                        <li key={index} className="lista-notas_item">
                            <CardNote title={note.title} text={note.text}/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}