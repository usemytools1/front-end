import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../actions";


class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleClick = e => {
      this.props.history.push("sign-up")
  }
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/tool-list"));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
        <button onClick={this.handleClick}>Sign Up</button>
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
  { loginAction }
)(Login);
