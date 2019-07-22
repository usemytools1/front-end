import React from "react";
import { connect } from "react-redux";
import { updateTool, deleteTool } from "../../actions";

import "./styles/styles.css";

class EditOwnedTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: {
				id: "",
				username: "Chaz",
				borrower: "",
				name: "",
				desc: ""
      }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    console.log(id);
    const tool = this.props.tools.find(tool => `${tool.id}` === id);
    console.log(tool);

    this.setState({
      tool: {
        id: tool.id,
        name: tool.name,
        username: tool.username,
        borrower: tool.borrower,
        desc: tool.desc
      }
    });
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      tool: { ...this.state.tool, [e.target.name]: e.target.value }
    });
  };
  editTool = e => {
    e.preventDefault();
    this.props.updateTool(this.state.tool);
  };
  deleteTool = e => {
    e.preventDefault();
    this.props.deleteTool(this.state.tool);
  }

  render() {
    return (

        <div className="formDiv">
          <form onSubmit={this.editTool} className="editToolForm">
            <h3 className="formTitle">Edit</h3>
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
            <button className="editToolBtn">Edit Tool</button>
            <button onClick={this.deleteTool} className="deleteToolBtn">Delete Tool</button>
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
  {updateTool, deleteTool}
)(EditOwnedTool);
