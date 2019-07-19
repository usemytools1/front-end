import React from "react";
import { connect } from "react-redux";
import "./styles/styles.css";

class BorrowTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: {
        id: "",
        name: "",
        img: "",
        owner: "",
        availability: true,
        desc: ""
      }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    const tool = this.props.tool.find(tool => `${tool.id}` === id);

    this.setState({
      id: tool.id,
      name: tool.name,
      img: tool.img,
      owner: tool.owner,
      availability: tool.availability,
      desc: tool.desc
    });
  }

  render() {
    return (
      <div className="Borrow_Tool">
        <img className="toolImg" alt={this.state.tool.name} src={this.state.tool.img} />
        <h3 className="toolName">{this.state.tool.name}</h3>
        <p className="toolOwner">Owner: {this.state.tool.owner}</p>
        <p className="toolDesc">{this.state.tool.desc}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  {}
)(BorrowTool);
