import React, { Component } from 'react';
import './styles/styles.css'
import { connect } from "react-redux";


class ToolsUserIsBorrowing extends Component {
  state = {
    tools: {}
  }

  componentDidMount() {
    this.setState({
      tools: this.props.tools.filter(tool => tool.username = "")
    })
  }

    render() {
        return (
            <div>
              <div className="toolCards">
              {this.props.tools.map(tool => (
                <div className="toolCard">
                    <img className="toolImg" alt={tool.name} src={tool.img}></img>
                    <h3 className="toolName">{tool.name}</h3>
                    <p className="toolOwner">Owner: {tool.username}</p>
                    <p className="toolDesc">{tool.desc}</p>
                </div>
                ))}
            </div>
            </div>
        )
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
  