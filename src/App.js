import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="sections">
          <Switch>
            <Route path="/" exact component={Intro} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
