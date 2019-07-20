import React from "react";
import { Component } from "react";
import { getTools } from "../../actions";
import Tool from "./Tool";
import { connect } from "react-redux";
import "./styles/styles.css";

class ToolList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTools();
  }

  render() {
    return (
      <div>
        <a href="/add-tool">Add A Tool</a>
        <div className="toolCards">
          {this.props.tools.map((tool, i) => {
            return <Tool key={i} tool={tool} />;
          })}
        </div>
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
  { getTools }
)(ToolList);
