import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";

import { addTool } from "../../actions";
import "./styles/styles.css";

class AddATool extends Component {
  state = {
    tool: {
      // id: uuid.v4(),
      username: localStorage.getItem("username"),
      borrower: "",
      name: "",
      desc: ""
    }
  };
  inputChange = e => {
    
    e.preventDefault();
    this.setState({
      ...this.state,
      tool: { ...this.state.tool, [e.target.name]: e.target.value }
    });
  };
  newTool = e => {
    e.preventDefault();
    console.log(this.state)
    this.props.addTool(this.state.tool);
  };
  render() {
    return (
      <div className="formDiv">
        <form onSubmit={this.newTool} className="addToolForm">
          <h2 className="formTitle">Add a Tool</h2>
          <input
            type="text"
            name="name"
            placeholder="Tool name"
            value={this.state.tool.name}
            onChange={this.inputChange}
          />
          {/* <input
            type="file"
            name="img"
            placeholder="Tool image link"
            value={this.state.tool.img}
            onChange={this.inputChange}
          /> */}
          <input
            type="text"
            name="desc"
            placeholder="Tool description"
            value={this.state.tool.desc}
            onChange={this.inputChange}
          />
          <button className="addToolBtn">Add Tool</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { addTool }
)(AddATool);
