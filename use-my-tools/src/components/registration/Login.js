import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../actions";
import "./styles/styles.css";
import { withRouter } from 'react-router-dom'


class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  componentDidUpdate(){

  }

  handleClick = e => {
      this.props.history.push("/sign-up")
  }
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  refreshPage(){
    window.location.reload();
}

  handleLogin = e => {
    e.preventDefault();
    this.props
      .loginAction(this.state.credentials)
      .then(() => this.props.history.push("/tool-list"))
      .then(() => this.refreshPage())
    // this.refreshPage()
  };

  render() {
    console.log(this.props)
    return (
      <div className="Login" >
        <form onSubmit={this.handleLogin}>
          <h3>LOGIN</h3>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Login</button>
        </form>
        <button className="sign-up" onClick={this.handleClick}>Sign Up</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
  error: state.error,
  isLoading: state.isLoading
});

const LoginWithRouter = withRouter(Login)
export default connect(
  mapStateToProps,
  { loginAction }
)(LoginWithRouter);
