import React, { Component } from 'react';

export default class TodoItem extends Component {

  render() {
    const { title, handleDelete, handleEdit, editItem, editID, id } = this.props
    let showFlag = true;
    if (editItem === true && editID === id) {
      showFlag = false;
    }
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          {showFlag &&
            (
              <span className="mx-2 text-success"
                onClick={handleEdit}
              >
                <i className="fas fa-pen"></i>
              </span>
            )
          }
          <span className="mx-2 text-danger"
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    )
  }
}
