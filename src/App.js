import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

const todoItems = [
  {
    name: 'Laundry',
    id: Math.floor(Math.random() * 1000),
    done: false
  },
  {
    name: 'Renew tabs',
    id: Math.floor(Math.random() * 1000),
    done: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: todoItems,
      searchTerm: '',
    }
  }
  
  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Math.floor(Math.random() * 1000),
      done: false
    };
    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  clearDone = () => {
    this.setState({
      items: this.state.items.filter(item => !item.done)
    });
  };

  toggleItem = id => {
    console.log(id);
    this.setState({
      items: this.state.items.map(item => {
        if(item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item;
        }
      })
    })
  }

  handleSearch = e => {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>React Todo List</h2>
        <TodoForm addItem={this.addItem} clearDone={this.clearDone} searchTerm={this.searchTerm} handleSearch={this.handleSearch} />
        <TodoList items={this.state.items.filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
