import React from "react";
import { connect } from "react-redux";
import "./styles/styles.css";
import { Link } from 'react-router-dom';
import { borrowTool } from "../../actions";


class BorrowTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: {
        id: "",
        username: "",
        borrower: "",
        name: "",
        desc: ""
      }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    console.log(id)
    const tool = this.props.tools.find(tool => `${tool.id}` === id);
    console.log(tool)

    this.setState({
      tool: {
        id: tool.id,
        name: tool.name,
        username: tool.username,
        borrower: tool.borrower,
        desc: tool.desc
      }

    });
  }

  // historyPush () {
  //   this.props.history.push("/tool-list");
  // }

  clickHandler = e => {
    e.preventDefault();
    this.setState({
      tool: {
        id: this.state.tool.id,
        name: this.state.tool.name,
        username: this.state.tool.username,
        borrower: localStorage.getItem("username"),
        desc: this.state.tool.desc
      }
    })
    this.borrowHandler()
    // this.historyPush()
  }

  borrowHandler = e => {
    this.props.borrowTool(this.state.tool, this.state.tool.id)
  };

  render() {
    if(this.state.tool.borrower === ""){
    return (
      <div className="toolCard">
        <Link style={{textDecoration: 'none', color:'White'}} to={`borrow-tool/${this.state.tool.id}`}>
        <h3 className="toolName">{this.state.tool.name}</h3>
        <p className="toolOwner">Owner: {this.state.tool.username}</p>
        <span
          className='isAvail'>
          Available
        </span>
        <p className="toolDesc">{this.state.tool.desc}</p>
        </Link>
        <button onClick={this.clickHandler}>Borrow</button>
      </div>
    )
    }else{
      return (
        <div className="toolCard">
          <Link style={{textDecoration: 'none', color:'White'}} to={`borrow-tool/${this.state.tool.id}`}>
          <h3 className="toolName">{this.state.tool.name}</h3>
          <p className="toolOwner">Owner: {this.state.tool.username}</p>
          <span
            className={'isntAvail'}>
            Unavailable
          </span>
          <p className="toolDesc">{this.state.tool.desc}</p>
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
  { borrowTool }
)(BorrowTool);
