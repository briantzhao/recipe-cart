import axios from "axios";
import { Component } from "react";
import MealPlan from "../MealPlan/MealPlan";
const server = "http://localhost:8080";

export default class SaveForm extends Component {
  state = {
    weekCheck: false,
    renderCalendar: false,
    blockedMeals: [],
    selectedDay: null,
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
    //TODO: axios call to get blocked off meals of the week
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { ingredients, recipe } = this.props;
    //TODO: change post url to include userID
    axios
      .post(`${server}/recipes`, { ingredients, recipe })
      .then
      //TODO: return to homepage
      ()
      .catch((err) => {
        console.log(err);
      });
  };
  selectDay = () => {};

  render() {
    return (
      <form className="SaveForm" onSubmit={this.handleSubmit}>
        <label className="SaveForm__check__label">
          <input
            className="SaveForm__check__input"
            type="checkbox"
            name="weekCheck"
            onChange={this.handleChange}
            checked={this.state.weekCheck}
          />
          Add this to the weekly calendar
        </label>
        {/* TODO: pass props to MealPlan to render proper days of the week and onClick to register meal of the week to be saved */}
        {this.state.renderCalendar && (
          <MealPlan
            blocked={this.state.blockedMeals}
            day={this.state.selectedDay}
            onClick={this.selectDay}
          />
        )}
        <button className="SaveForm__submit-btn">Submit</button>
      </form>
    );
  }
}
