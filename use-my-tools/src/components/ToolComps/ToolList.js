import React from 'react'
import Tool from './Tool'
import { connect } from "react-redux";
import './styles/styles.css'

const ToolList = props => {
  return (
    <div className="toolCards">
      {props.tools.map((tool, i) => {
        return <Tool key={i} tool={tool}/>
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  tools: state.tools,
  error: state.error,
  isLoading: state.isLoading
});


export default connect(
  mapStateToProps,
  {}
)(ToolList);

