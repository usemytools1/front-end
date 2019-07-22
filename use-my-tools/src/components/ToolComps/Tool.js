import React from 'react';
import { Component } from 'react';
import {getTools} from "../../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './styles/styles.css'

class Tool extends Component {

  componentDidMount() {
    this.props.getTools();
  }

  render() {
    if(this.props.borrower === ''){
    return (
      <div className="toolCard">
        <Link style={{textDecoration: 'none', color:'White'}} to={`borrow-tool/${this.props.tool.id}`}>
        <h3 className="toolName">{this.props.tool.name}</h3>
        <p className="toolOwner">Owner: {this.props.tool.username}</p>
        <span
          className='isAvail'>
          Available
        </span>
        <p className="toolDesc">{this.props.tool.desc}</p>
        </Link>
      </div>
    )
    }else{
      return (
        <div className="toolCard">
          <Link style={{textDecoration: 'none', color:'White'}} to={`borrow-tool/${this.props.tool.id}`}>
          <h3 className="toolName">{this.props.tool.name}</h3>
          <p className="toolOwner">Owner: {this.props.tool.username}</p>
          <span
            className={'isntAvail'}>
            Unavailable
          </span>
          <p className="toolDesc">{this.props.tool.desc}</p>
          </Link>
        </div>
      )
    }

  }

}

const mapStateToProps = state => ({
  tools: state.tools,
  error: state.error,
  isLoading: state.isLoading
});


export default connect(
  mapStateToProps,
  {getTools}
)(Tool);

