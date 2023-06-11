import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Forfun from "./pages/Forfun";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* //The navbar is included in every single */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/forfun" exact component={Forfun} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
