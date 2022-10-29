import './main.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route exact path="/categories" element={<CategoriesView />} />
        <Route exact path="/products" element={<ProductsView />} />
        <Route exact path="/products/:id" element={<ProductDetailsView />} />
        <Route exact path="/contacts" element={<ContactsView />} />
        
        <Route exact path="/search" element={<SearchView />} />
        <Route exact path="/compare" element={<CompareView />} />
        <Route exact path="/wishlist" element={<WishListView />} />
        <Route exact path="/shoppingcart" element={<ShoppingCartView />} />
        <Route exact path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
