import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent'

function App() {
  return (
    <div className="App">

      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorente Con Fusion</NavbarBrand>
        </div>
      </Navbar>

      <Menu />
    </div>
  );
}

export default App;
