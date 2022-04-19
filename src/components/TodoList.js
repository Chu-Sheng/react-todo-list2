import React, { Component } from 'react'
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit, editItem, editID } = this.props
    return (
      <ul className="list-group my-3">
        <h3 className="text-capitalize text-center">todo list</h3>
        {
          items.map(item => {
            return (
              <TodoItem key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
                editItem={editItem}
                editID={editID}
                id={item.id}
              />
            )
          })
        }
        <button type="button" className="btn btn-danger col-12 text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    )
  }
}
