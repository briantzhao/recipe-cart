import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmissionPage from "./pages/SubmissionPage/SubmissionPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MealsPage from "./pages/MealsPage/MealsPage";
import ListPage from "./pages/ListPage/ListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  //TODO: Add hooks for user and loggedIn, pass to Header
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id/meals" element={<MealsPage />} />
          <Route path="/:id/list" element={<ListPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/:id/submit" element={<SubmissionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
