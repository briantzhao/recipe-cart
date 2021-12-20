import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmissionPage from "./pages/SubmissionPage/SubmissionPage";

function App() {
  return (
    <div className="App">
      <SubmissionPage />
    </div>
  );
}

export default App;
