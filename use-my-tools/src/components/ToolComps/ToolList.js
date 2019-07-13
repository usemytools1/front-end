import React from 'react'
import Tool from './Tool'
import './styles/styles.css'

const ToolList = props => {
  return (
    <div className="toolCards">
      {props.tools.map(tool => {
        return <Tool tool={tool}/>
      })}
    </div>
  )
}

export default ToolList
