import React from "react";
import { connect } from "react-redux";
import "./styles/styles.css";
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

    const tool = this.props.tools.find(tool => `${tool.id}` === id);

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
    console.log(this.state)
    const
      newTool = {
        id: this.state.tool.id,
        name: this.state.tool.name,
        username: this.state.tool.username,
        borrower: localStorage.getItem("username"),
        desc: this.state.tool.desc
      }
    console.log(this.state)
    this.borrowHandler(newTool)
    // this.historyPush()
  }

  borrowHandler = (newTool, e) => {
    this.props.borrowTool(newTool, this.state.tool.id)
  };

  render() {
    if(this.state.tool.borrower === ""){
    return (
      <div className="toolCard">
        <h3 className="toolName">{this.state.tool.name}</h3>
        <p className="toolOwner">Owner: {this.state.tool.username}</p>
        <span
          className='isAvail'>
          Available
        </span>
        <p className="toolDesc">{this.state.tool.desc}</p>
        <button onClick={this.clickHandler}>Borrow</button>
      </div>
    )
    }else{
      return (
        <div className="toolCard">
          <h3 className="toolName">{this.state.tool.name}</h3>
          <p className="toolOwner">Owner: {this.state.tool.username}</p>
          <span
            className={'isntAvail'}>
            Unavailable
          </span>
          <p className="toolDesc">{this.state.tool.desc}</p>
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
