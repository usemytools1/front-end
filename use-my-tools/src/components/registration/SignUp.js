import React from "react";
import { connect } from "react-redux";
import { signUpAction } from "../../actions";




class SignUp extends React.Component {
    state = {
        credentials: {
            // email: "",
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
            }
        });
    };

    handleSignUp = e => {
        e.preventDefault();
        this.props.signUpAction(this.state.credentials)
        .then(() => this.props.history.push("/tool-list"));
    };

    render() {
        return (
        <div>
            <form className="SignUp" onSubmit={this.handleSignUp}>
            <h3>SIGN UP</h3>
            <input
            type="text"
            name="username"
            placeholder="Username"
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
            <button>Sign Up</button>
        </form>
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
    { signUpAction }
  )(SignUp);
  