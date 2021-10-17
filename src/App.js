import Home from "./pages/Home";
import { Route, Switch } from 'react-router';

// teste para deploy

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/eu-sensorial" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
