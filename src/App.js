import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm.js';

class App extends React.Component {
  state = {
    items: []
  }

  addItem = (item) => {
    const newList = [...this.state.items]
    const todo = {
      'task': item,
      'done': false
    }
    newList.push(todo)
    this.setState({
      items: newList
    })
  }
  handleDelete = selectedIndex => {

    // let itemsClone = [...this.state.items]
    // itemsClone = item.splice()

    const filteredItems = this.state.items.filter((item, index) => {
      return index !== selectedIndex
    })

    this.setState({
      items: filteredItems
    })
  }

  handleComplete = selectedItem => {
    const updatedList = [...this.state.items]
    let todo = updatedList[selectedItem]
    todo.done = !todo.done
    this.setState({
      items: updatedList
    })
  }


  render() {
    const { items } = this.state
    return (
      <div className="App" >

        <TodoForm items={items} addItem={this.addItem} handleDelete={this.handleDelete} handleComplete={this.handleComplete}
        />

      </div>
    );

  }
}

export default App;
