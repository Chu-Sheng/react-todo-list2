import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
    editID: ''
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    if (this.state.editItem === false) {
      const updatedItems = [...this.state.items, newItem];
      this.setState({
        items: updatedItems,
        item: '',
        id: uuidv4(),
        editItem: false,
        editID: '',
      })
    } else {
      const newUpdatedItems = this.state.items.map(item => {
        if (item.id === this.state.id) {
          item.title = this.state.item
          return item
        }
        return item
      })
      this.setState({
        items: newUpdatedItems,
        item: '',
        id: uuidv4(),
        editItem: false,
        editID: ''
      })
    }
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = (id) => {
    // const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      // items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
      editID: id
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 ">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              editItem={this.state.editItem}
              editID={this.state.editID}
            />
          </div>
        </div>
      </div>
    )
  }
}

