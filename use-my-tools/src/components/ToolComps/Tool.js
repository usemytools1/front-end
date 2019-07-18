import React from 'react'
import './styles/styles.css'

const tool = props => {
  return (
    <div className="toolCard">
      <img className="toolImg" alt={props.tool.name} src={props.tool.img}></img>
      <h3 className="toolName">{props.tool.name}</h3>
      <p className="toolOwner">Owner: {props.tool.owner}</p>
      <span
        className={`${props.tool.availability} ? isAvail : isntAvail`}>
        {props.tool.availability ? 'Available ' : 'Unavailable '}
      </span>
      <p className="toolDesc">{props.tool.desc}</p>
      {
        props.tool.availability ?
        <button className="canBeBorrowed">Borrow</button> :
        <button className="cantBeBorrowed" disabled >Borrow</button>
      }
    </div>
  )
}

export default tool
