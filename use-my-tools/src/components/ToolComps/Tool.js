import React from 'react'
import './styles/styles.css'

const tool = props => {
  return (
    <div className="toolCard">
      <img className="toolImg" alt={props.tool.name} src={props.tool.img}></img>
      <h3 className="toolName">{props.tool.name}</h3>
      <span
        className={`toolAvail ${props.tool.availability} ? available : notAvailable`}>
        {props.tool.availability ? 'Available ' : 'Unavailable '} from {props.tool.owner}
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
