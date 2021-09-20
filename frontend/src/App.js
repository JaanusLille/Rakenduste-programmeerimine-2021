import { Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';

function App() {
  return (
    <div>
      <Navbar />
      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='/cart'>
        <Cart />
      </Route>

      <Route path='/add-item'>
        <AddItem />
      </Route>
    </div>
    
  );
}

export default App;
// siinsed asjad on nähtavad igal lehel