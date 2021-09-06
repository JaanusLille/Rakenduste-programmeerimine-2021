import { Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='/cart'>
        <Cart />
      </Route>

      <Route path='/add-item'>
        <div > Add-item, mida pole veel valmis </div>
      </Route>
    </div>
    
  );
}

export default App;
// siinsed asjad on nähtavad igal lehel