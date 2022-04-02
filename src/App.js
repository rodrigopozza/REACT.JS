
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { ListarCliente } from './views/Cliente/Listar';

import { ListarServico } from './views/Servico/Listar';
import { Menu } from './Components/Menu';
import { Item } from './views/Servico/Item';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/listar-cliente" component={ListarCliente} />
          <Route path="/listar-servico" component={ListarServico} />
          <Route path="/listar-pedido/:id" component={Item} />
        
        </Switch>

      </Router>
    </div>
  );
}

export default App;
