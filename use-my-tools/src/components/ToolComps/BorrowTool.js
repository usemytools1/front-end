// Will open up a new page with the tool that was clicked on and be able to borrow it if available
import React from 'react'
import { connect } from "react-redux";
import './styles/styles.css'



const BorrowTool = props => {
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

const mapStateToProps = state => ({
    tools: state.tools,
    error: state.error,
    isLoading: state.isLoading
  });
  
  export default connect(
    mapStateToProps,
    { }
  )(BorrowTool);
  