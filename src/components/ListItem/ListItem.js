import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {

    render() {
        const { label, deleteList, onlabelClick, onImportant
        } = this.props;

        let listClassName = 'pull-left todo-list-title';

        listClassName += label.important ? ' important' : '';
        listClassName += label.isDone ? ' done' : '';

        return (
            <li style={{ "listStyletype": "none", }}>
                <span 
                className={ listClassName }
                onClick={ () => onlabelClick(label.id) }
                >
                    {label.title}
                </span>
                <section className="buttons">
                    <button 
                        className="btn btn-danger"
                        onClick = {() => deleteList(label.id)}>
                        <i className="fa fa-remove"></i>
                    </button>
                    <button className="btn btn-success"
                    onClick = {() => onImportant(label.id) }>
                        <i className="fa fa-check"></i>
                    </button>
                </section>

            </li>
        );
    };
};

export default ListItem;