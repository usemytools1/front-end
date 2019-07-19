import React, { Component } from 'react';
import './styles/styles.css'
import { connect } from "react-redux";


class ToolsUserIsBorrowing extends Component {
    render() {
        return (
            <div className="toolCard">
            <img className="toolImg" alt={this.props.userBorrowingTools.name} src={this.props.userBorrowingTools.img}></img>
            <h3 className="toolName">{this.props.userBorrowingTools.name}</h3>
            <p className="toolOwner">Owner: {this.props.userBorrowingTools.owner}</p>
            <p className="toolDesc">{this.props.userBorrowingTools.desc}</p>
          </div>
        )
    }
}


const mapStateToProps = state => ({
    userBorrowingTools: state.userBorrowingTools,
    error: state.error,
    isLoading: state.isLoading
  });
  
  export default connect(
    mapStateToProps,
    {  }
  )(ToolsUserIsBorrowing);
  