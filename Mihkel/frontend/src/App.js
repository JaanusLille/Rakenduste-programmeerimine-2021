import { Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';
import AddCategory from './pages/AddCategory';
import Categories from './pages/CategoryPage';
import AdminHome from './pages/AdminHome';
import SingleItem from './pages/SingleItem';
import EditItem from './pages/EditItem';

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

      <Route path='/admin'>
        <AdminHome />
      </Route>

      <Route path='/item/:itemId'>
        <SingleItem />
      </Route>

      <Route path='/edit-item/:itemId'>
        <EditItem />
      </Route>
      
      {/* Siia lisada "kategooriate lisamine" ja "kategooriad" */}

      <Route path='/add-category'>
        <AddCategory/>
      </Route>

      <Route path='/categories'>
        <Categories/>
      </Route>
    </div>
    
  );
}

export default App;
// siinsed asjad on nähtavad igal lehel