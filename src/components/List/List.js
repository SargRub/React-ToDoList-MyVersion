import React from 'react';

import ListItem from '../ListItem';

import './List.css';

const List = ({ todoList, deleteItem, onImportant, onlabelClick }) => {

  const elements = todoList.map((list) => {
    return (
    <ListItem 
    label={list} 
    key={list.id}
    deleteList={deleteItem} 
    onImportant={onImportant}
    onlabelClick={onlabelClick}
    />
    )
  });

  return (
    <ul className="list_container">
      { elements }
    </ul>
  );
};

export default List;