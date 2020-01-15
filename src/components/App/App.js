import React, { Component } from 'react';
import Filter from '../Filter';
import Header from '../Header';
import List from '../List'
import AddItem from '../AddItem'

export default class App extends Component {

    state = {
        todoData:
            [
                this.createNewItem(1, "Learn Numpy"),
                this.createNewItem(2, "Learn React"),
                this.createNewItem(3, "Learn Scipy"),
                this.createNewItem(4, "Learn Android")
            ]
    }

    createNewItem(id, title) {

        return {
            id,
            title,
            important: false,
            isDone: false
        }
    }
    onlabelClick = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((obj) => obj.id === id);

            const obj = {
                ...todoData[idx],
                isDone: !todoData[idx].isDone
            };

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    obj,
                    ...todoData.slice(idx + 1)
                ]
            }
        });
    };

    onImportant = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((obj) => obj.id === id);

            const obj = {
                ...todoData[idx],
                important: !todoData[idx].important
            };

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    obj,
                    ...todoData.slice(idx + 1)
                ]
            }
        });
    };

    onDeleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((obj) => obj.id === id);

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ]
            }
        });
    }
    onAddItem = (text) => {
        const title = text.trim();
        if (!title) {
            return;
        }

        this.setState(({ todoData }) => {
            let id = 1;

            if (todoData[todoData.length - 1]) {
                id = todoData[todoData.length - 1].id + 1;
            }

            return {
                todoData: [...todoData, this.createNewItem(id, title)]
            }
        });
    };

    render() {

        return (
            <div className="container">
                <Header />
                <Filter />
                <div className="row marginTopBottom">
                    <List todoList={this.state.todoData}
                        deleteItem={this.onDeleteItem}
                        onImportant={this.onImportant}
                        onlabelClick={this.onlabelClick} />
                </div>
                <AddItem onAddItem={this.onAddItem} />
            </div>
        );
    };
}