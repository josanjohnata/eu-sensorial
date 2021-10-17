import Home from "./pages/Home";
import { Route, Switch } from 'react-router';
import Humor from './pages/Humor';

// teste para deploy

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/eu-sensorial" component={Home} />
        <Route exact path="/humor" component={Humor} />
      </Switch>
    </div>
  );
}

export default App;
