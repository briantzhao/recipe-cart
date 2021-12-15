import { Component } from "react";
import "./App.scss";
import axios from "axios";
import $ from "jquery";

const heroku = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  state = {
    recipe: "",
    ingredients: null,
    url: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { url } = this.state;
    const headers = {
      "X-Requested-With": "XMLHttpRequest",
    };
    const ingredients = [];
    const recipe = [];

    $.ajax({
      headers: { "X-Requested-With": "XMLHttpRequest" },
      type: "GET",
      url: `${heroku}${url}`,
      success: function (data) {
        $(data)
          .find(".ingredient")
          .each(function () {
            const text = $(this).text();
            ingredients.push(text);
          });

        $(data)
          .find(".prep-steps li")
          .each(function () {
            const text = $(this).text();
            recipe.push(text);
          });
      },
    }).then(() => {
      console.log("ingredients: ", ingredients, " recipe: ", recipe);
      this.setState({ ingredients, recipe });
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form className="App__form" onSubmit={this.handleSubmit}>
            <label className="App__form__label">
              Enter a URL
              <input
                className="App__form__input"
                type="url"
                placeholder="Enter a URL"
                name="url"
                onChange={this.handleChange}
                value={this.state.url}
              ></input>
              <button className="App__form__button">Submit</button>
            </label>
          </form>
          <h1 className="App__ingredients__title">Ingredients</h1>
          <ul className="App__ingredients__body">
            {this.state.ingredients ? (
              this.state.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <></>
            )}
          </ul>
          <h1 className="App__recipe__title">Recipe</h1>
          <ol className="App__recipe__body">
            {this.state.recipe ? (
              this.state.recipe.map((step, index) => (
                <li key={index}>{step}</li>
              ))
            ) : (
              <></>
            )}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
