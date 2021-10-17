import Home from "./pages/Home";
import { Route, Switch } from 'react-router';
import Humor from './pages/Humor';
import Porque from './pages/PorQue';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Contatos from './pages/Contatos';
import NossosEspecialistas from './pages/NossosEspecialistas';
import Relatorios from './pages/Relatorios';
import ComoEstou from './pages/ComoEstou';

// teste para deploy

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/eu-sensorial" component={Home} />
        <Route exact path="/humor" component={Humor} />
        <Route exact path="/porque" component={Porque} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contatos" component={Contatos} />
        <Route exact path="/nossos-especialistas" component={NossosEspecialistas} />
        <Route exact path="/relatorios" component={Relatorios} />
        <Route exact path="/como-estou" component={ComoEstou} />
      </Switch>
    </div>
  );
}

export default App;
