import React from "react";
import PropTypes from "prop-types";

class Login extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
  };

  render() {
    return (
      <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button
          className="google"
          onClick={() => this.props.authenticate("Google")}
        >
          Log In With Google
        </button>
        <button
          className="github"
          onClick={() => this.props.authenticate("Github")}
        >
          Log In With GitHub
        </button>
        {/* <button
          className="twitter"
          onClick={() => this.props.authenticate("Twitter")}
        >
          Log In With Twitter
        </button> */}
      </nav>
    );
  }
}

//// Using stateless functional component - props.authenticate("Github")
//// No this required. props are passed as parameter!
// const Login = (props) => (
//   <nav className="login">
//     <h2>Inventory Login</h2>
//     <p>Sign in to manage your store's inventory.</p>
//     <button className="github" onClick={() => props.authenticate("Github")}>
//       Log In With GitHub
//     </button>
//   </nav>
// );

// Login.propTypes = {
//   authenticate: PropTypes.func.isRequired,
// };

export default Login;
