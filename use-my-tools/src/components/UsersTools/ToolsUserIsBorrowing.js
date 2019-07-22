import React, { Component } from 'react';
import './styles/styles.css'
import { connect } from "react-redux";


class ToolsUserIsBorrowing extends Component {
  state = {
    tools: {}
  }

  render() {
    return (
      <div className="toolCards">
        {this.props.tools
          .filter(tool => tool.borrower === localStorage.getItem("username"))
          .map(tool => (
            <div className="toolCard">
                <h3 className="toolName">{tool.name}</h3>
                <p className="toolOwner">Owner: {tool.username}</p>
                <p className="toolDesc">{tool.desc}</p>
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
    {  }
  )(ToolsUserIsBorrowing);
  