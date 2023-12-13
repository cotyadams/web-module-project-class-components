import React from 'react'
export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  onChange = (evt) => {
    const { value } = evt.target;
    this.setState({ ...this.state, name: value })
    
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.addItem(evt, this.state.name);
    this.setState({ name: '' })
  }
  render() {
    return (
      <div>
       <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.name} onChange={this.onChange}/>
          <button type='submit'>Add Item</button>
        </form>
        <button onClick={this.props.onClick}>{this.props.hiding ? 'Show Completed' : 'Hide Completed' }</button>
      </div>
    )
  }
}
