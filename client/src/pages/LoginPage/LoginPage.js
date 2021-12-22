import axios from "axios";
import { Link } from "react-router-dom";
import { Component } from "react";
const server = "http://localhost:8080";

export default class LoginPage extends Component {
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
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  //TODO: implement onSubmit
  onSubmit = () => {};
  render() {
    return (
      <main className="login">
        <form className="login__form">
          <h1 className="login__form__title">Sign Into Recipe Cart!</h1>
          <label className="login__form__label">
            Email:
            <input
              className="login__form__field"
              type="email"
              placeholder="Email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </label>
          <label className="login__form__label">
            Password:
            <input
              className="login__form__field"
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </label>
          <section className="login__form__buttons">
            <Link to="/">
              <button className="login__form__btn--cancel">Cancel</button>
            </Link>
            <button
              className="login__form__btn--submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </section>
        </form>
        <section className="login__signup">
          <h2 className="login__signup__title">
            Don't have an account? <Link to="/signup">Sign up!</Link>
          </h2>
        </section>
      </main>
    );
  }
}
