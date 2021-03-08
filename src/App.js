import "./App.css";
import IssueList from "./components/IssueList";
import IssueKey from "./components/IssueKey";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Badge } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const fetchData = fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues"
    );
    const jsonData = fetchData.then((response) => {
      return response.json();
    });
    fetchData.catch((error) => {
      console.log("Error is", error);
    });
    jsonData.then((result) => {
      setData((data) => result);
      //console.log("Result is result" , result);
    });
  }, []);

  //console.log(data);

  return (
    <Container>
      <Router>
        <div>
          <Container className="App-header" variant="dark">
            GITHUB ISSUE PAGE
          </Container>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <IssueList data={data} setIndex={setIndex} />
            </Route>
            <Route path="/issue" exact>
              <IssueKey data={data} index={index} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
