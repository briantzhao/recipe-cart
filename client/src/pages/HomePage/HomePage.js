import axios from "axios";
import { Link } from "react-router-dom";
import { Component } from "react";
const server = "http://localhost:8080";

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <h1>HomePage</h1>
        {/* TODO: change 1 to :id */}
        <Link to="/1/submit">Add a recipe</Link>
      </main>
    );
  }
}
