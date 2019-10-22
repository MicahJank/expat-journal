import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWIthAuth";

// import imgs
import logo from "../imgs/LogoEJ.png";
import group from "../imgs/group-svgrepo-com.png";
import uploader from "../imgs/icon-uploader-2.png";
import save from "../imgs/save-button-2.png";

class LoginPage extends React.Component {
  state = {
    credentials: {
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

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/stories");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="auth-page">
        <div className="hero-section">
          <div className="auth-nav-bar">
            <img src={logo} alt="expat journal logo" />
            <button className="auth-nav-bar-sign-in" disabled>
              Sign in
            </button>
          </div>

          <h1>Expat Journal</h1>
          <h3>Experiences to remember and share</h3>
        </div>

        <div className="auth-form">
          <h2>Welcome back!</h2>

          <form>
            <input type="text" name="username" placeholder="Name" required></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            ></input>
            <button
              type="submit"
              className="submit-rectangle sign-in-rectangle"
            >
              Sign in
            </button>
          </form>

          <h4>
            New to Expat Journal? <Link to="/sign-up">Sign up</Link> here!
          </h4>
        </div>

        <div className="auth-bottom-section">
          <h2>About Expat Journal</h2>

          <div className="auth-bottom-section-img-row">
            <div>
              <img src={uploader} alt="upload" />
              <p>
                Upload experiences about living abroad. Share your storeis or
                keep them private as your personal journal.
              </p>
            </div>
            <div>
              <img src={group} alt="group" />
              <p>
                Join and participate in groups of the locations you choose.
                Discover areas around where you live.
              </p>
            </div>
            <div>
              <img src={save} alt="save" />
              <p>
                Save content of interest from other expatriates that you find
                interesting and might want to review later.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
