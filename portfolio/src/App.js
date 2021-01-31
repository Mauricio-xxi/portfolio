import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Main } from './pages/Main';
import { notFound } from './pages/404';
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <div>
          <NavBar/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/users">
              {/* <Users /> */}
            </Route>
            <Route path="/">
              <Main/>
            </Route>
            <Route path="*">
              <notFound/>              
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
