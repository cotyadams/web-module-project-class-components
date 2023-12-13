import React from 'react'
import Todo from './Todo';
export default class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.list.map((toDo) => (
          <Todo key={toDo.id} toDo={toDo} toggleItem={this.props.toggleItem} />
        ))}
      </div>
    )
  }
}
