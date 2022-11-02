import Parent from "./components/Parent";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import ChildA from "./components/ChildA";
import ChildB from "./components/ChildB";

function App() {
  return (
    // <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Parent</Link>
        </li>
        <li>
          <Link to="/childa">childa</Link>
        </li>
        <li>
          <Link to="/childb">childb</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/childa" component={ChildA} />
        <Route path="/childb" component={ChildB} />
        <Route path="/" component={Parent} />
      </Switch>
    </div>
    // </Router>
    // <Parent/>
  );
}

export default App;
