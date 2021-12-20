import { Component } from "react";
import $ from "jquery";
import URLForm from "../../components/Form/URLForm";
import List from "../../components/List/List";
import axios from "axios";
const heroku = "https://cors-anywhere.herokuapp.com/";
const server = "http://localhost:8080";

export default class SubmissionPage extends Component {
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
    console.log(url);
    axios
      .post(`${server}/urls`, { url })
      .then(({ data }) => {
        const { ingredients, recipe } = data;
        this.setState({ ingredients, recipe });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <URLForm
            value={this.state.url}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          {this.state.ingredients && (
            <List
              title="Ingredients"
              ordered={false}
              list={this.state.ingredients}
            />
          )}
          {this.state.recipe && (
            <List title="Recipe" ordered={true} list={this.state.recipe} />
          )}
        </header>
      </div>
    );
  }
}
