import React from 'react';
import { Component } from 'react';
import {getTools} from "../../actions";
import { connect } from "react-redux";
import './styles/styles.css'

class Tool extends Component {

  componentDidMount() {
    this.props.getTools();
  }

  render() {
    return (
      <div className="toolCard">
        <img className="toolImg" alt={this.props.tool.name} src={this.props.tool.img}></img>
        <h3 className="toolName">{this.props.tool.name}</h3>
        <p className="toolOwner">Owner: {this.props.tool.owner}</p>
        <span
          className={`${this.props.tool.availability} ? isAvail : isntAvail`}>
          {this.props.tool.availability ? 'Available ' : 'Unavailable '}
        </span>
        <p className="toolDesc">{this.props.tool.desc}</p>
        {
          this.props.tool.availability ?
          <button className="canBeBorrowed">Borrow</button> :
          <button className="cantBeBorrowed" disabled >Borrow</button>
        }
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
  {getTools}
)(Tool);

