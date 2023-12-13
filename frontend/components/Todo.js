import React from 'react'

export default class Todo extends React.Component {
  
  
  render() {
    return (
      <div>
        <p onClick={() => this.props.toggleItem(this.props.toDo.id)}>{this.props.toDo.name}{this.props.toDo.completed ? '✔️' : ''}</p>
      </div>
    )
  }
}
