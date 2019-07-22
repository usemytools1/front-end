import React, { Component } from "react";
import "./styles/styles.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class ToolsUserOwns extends Component {


  render() {
    return (
      <div className="toolCards">
        {this.props.tools
          .filter(tool => tool.username === localStorage.getItem("username"))
          .map(tool => (
            <div className="toolCard">
              <Link
                style={{ textDecoration: "none", color: "White" }}
                to={`edit-tool/${tool.id}`}
              >
                <h3 className="toolName">{tool.name}</h3>
                <p className="toolOwner">Owner: {tool.username}</p>
                <p className="toolDesc">{tool.desc}</p>
              </Link>
            </div>
          ))}
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
  {}
)(ToolsUserOwns);
