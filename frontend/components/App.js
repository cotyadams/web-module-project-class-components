import React from 'react'
import TodoList from './TodoList';
import Form from './Form';
import { useEffect } from 'react';
let list =
    [{
      name: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
    ]
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: list,
      hiding: false,
      hidden: []
    }
  }
  addItem = (evt, item) => {
    evt.preventDefault();
    let newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({ ...this.state, list: [...this.state.list, newItem] })
    console.log(this.state)
  }
  toggleItem = (id) => {
    this.setState({
      ...this.state, list: this.state.list.map((node) => {
        if (id === node.id) {
          return (
            { ...node, completed: !node.completed}
          )
        } else {
          return node
        }
      })
    })
  }
  onClick = () => {
    const { list, hidden, hiding } = this.state;
    let hiddenList = list.filter((node) => {
        return node.completed === true;
    })
      let filteredList = list.filter((node) => {
        return node.completed === false;
      })
    if (!hiding) {
      this.setState({ list: filteredList, hidden: hiddenList })
      this.setState({ hiding: !hiding })
    } else {
      this.setState({ ...this.state, list: [...list, ...hidden], hidden: [] })
      this.setState({ hiding: !hiding })
    }
  }
  render() {
    return (
      <div>
        <TodoList list={this.state.list} toggleItem={this.toggleItem} />
        <Form
          addItem={this.addItem}
          onClick={this.onClick}
          hiding={this.state.hiding}
        />
      </div>
    )
  }
}
