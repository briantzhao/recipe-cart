import { Component } from "react";
import URLForm from "../../components/URLForm/URLForm";
import List from "../../components/List/List";
import axios from "axios";
import SaveForm from "../../components/SaveForm/SaveForm";
const server = "http://localhost:8080";

export default class SubmissionPage extends Component {
  // TODO: add userID to state
  state = {
    recipe: null,
    ingredients: null,
    url: "",
    urlValid: null,
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
        console.log(data);
        const { ingredients, recipe } = data;
        this.setState({ ingredients, recipe, urlValid: true });
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
        this.setState({ urlValid: false });
      });
  };
  render() {
    return (
      <div className="Submission">
        <URLForm
          value={this.state.url}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.urlValid && (
          <section className="Submission__recipe-info">
            <List
              title="Ingredients"
              ordered={false}
              list={this.state.ingredients}
            />
            <List title="Recipe" ordered={true} list={this.state.recipe} />
            {/* TODO: pass userID to saveform */}
            <SaveForm
              ingredients={this.state.ingredients}
              recipe={this.state.recipe}
            />
          </section>
        )}
        {this.state.urlValid === false && (
          <h1 className="Submission__invalid-url">
            Recipe not found. Only recipes from Tasty, SeriousEats, and
            SimplyRecipes are accepted
          </h1>
        )}
      </div>
    );
  }
}
