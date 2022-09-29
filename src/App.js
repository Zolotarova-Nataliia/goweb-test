import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HashLinkPage from "./views/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HashLinkPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </>
  );
}

export default App;
