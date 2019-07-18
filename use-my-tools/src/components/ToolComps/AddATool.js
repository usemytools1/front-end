import React, { Component } from 'react';
import './styles/styles.css'

export default class AddATool extends Component {
  state = {
    tool: {
      name: '',
      img: '',
      owner: '',
      availability: true,
      desc: '',
    }
  }
  inputChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      tool: { ...this.state.tool, [e.target.name]: e.target.value }
    })
  }
  newTool = e => {
    e.preventDefault()
    this.props.addTool(this.state.tool)
    this.setState({
      tool: {
        name: '',
        img: '',
        owner: '',
        availability: true,
        desc: ''
      }
    })
  }
  render() {
    return (
      <div className="formDiv">
        <form onSubmit={this.newTool} className="addToolForm">
          <h2 className="formTitle">Add a Tool</h2>
          <input type="text" name="name" placeholder="Tool name" value={this.state.tool.name} onChange={this.inputChange}></input>
          <input type="file" name="img" placeholder="Tool image link" value={this.state.tool.img} onChange={this.inputChange}></input>
          <input type="text" name="desc" placeholder="Tool description" value={this.state.tool.desc} onChange={this.inputChange}></input>
          <button className="addToolBtn">Add Tool</button>
        </form>
      </div>
    )
  }
}