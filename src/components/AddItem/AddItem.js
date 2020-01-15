import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {
    state = {
        text: ''
    }

    onInputChange = ({ target }) => {

        this.setState({
            text: target.value
        });
    };

    onAddClick = () => {
        const { onAddItem } = this.props;

        this.setState(({ text }) => {
            onAddItem(text);

            return {
                text: ''
            }
        });
    }

    render() {

        const { onAddItem } = this.props;
        return (
            <div className="container_3">
                <input className="" placeholder="Add new data"
                    onChange={this.onInputChange}
                    value={this.state.text} />
                <button className="btn-primary btn_add"
                    onClick={this.onAddClick}>Add</button>
            </div>
        );
    }
}