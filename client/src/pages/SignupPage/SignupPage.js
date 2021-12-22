import axios from "axios";
import { Link } from "react-router-dom";
import { Component } from "react";
const server = "http://localhost:8080";

export default class SignupPage extends Component {
  state = {
    email: "",
    emailValid: true,
    password: "",
    passwordValid: true,
    fName: "",
    fNameValid: true,
    lName: "",
    lNameValid: true,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //TODO: implement handleSubmit
  handleSubmit = () => {};

  render() {
    return (
      <main className="signup">
        <form className="signup__form">
          <h1 className="signup__form__title">Create a new account!</h1>
          <label className="signup__form__label">
            Email:
            <input
              className="signup__form__field"
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label className="signup__form__label">
            First Name:
            <input
              className="login form__field"
              type="text"
              placeholder="First Name"
              name="fName"
              onChange={this.handleChange}
              value={this.state.fName}
            />
          </label>
          <label className="signup__form__label">
            Last Name:
            <input
              className="login form__field"
              type="text"
              placeholder="Last Name"
              name="lName"
              onChange={this.handleChange}
              value={this.state.lName}
            />
          </label>
          <label className="signup__form__label">
            Password:
            <input
              className="signup__form__field"
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <section className="signup__form__buttons">
            <Link to="/">
              <button className="signup__form__buttons--cancel">Cancel</button>
            </Link>
            <button
              className="signup__form__buttons--signup"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
          </section>
        </form>
        <section className="signup__login">
          <h2 className="signup__login__title">
            Already have an account? <Link to="/login">Sign In!</Link>
          </h2>
        </section>
      </main>
    );
  }
}
