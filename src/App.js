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
import { useEffect, useState } from 'react';
import { ProductContext } from './contexts/contexts'


function App() {
  
  // // for science and fun
  // function generateRandomNumber() {
  //   var min = 1
  //   var max = 5
  //   let randomNumber
  //   randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
  //   return randomNumber;
  // }
  
  // // for science and fun
  // function generateRandomBool() {
  //   var booleanValue;
  //   if ( Math.random() > .5 ){
  //     booleanValue = true;
  //   } else {
  //     booleanValue = false;  
  //   }
  //   return booleanValue;
  // }


  const [products, setProducts] = useState({
    // allProducts: [],
    featuredProducts: [],
    // flashSaleProducts: [],
    // rankingProducts: []
  })
  
  useEffect(() =>{
    // const fetchAllProducts = async () => {
    //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
    //   setProducts({...products, allProducts: await result.json()})
    // }
    // fetchAllProducts();

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts();

    // const fetchFlashSaleProducts = async () => {
    //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
    //   setProducts({...products, flashSaleProducts: await result.json()})
    // }
    // fetchFlashSaleProducts();

    // const fetchRankingProducts = async () => {
    //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
    //   setProducts({...products, rankingProducts: await result.json()})
    // }
    // fetchRankingProducts();

  }, [products, setProducts]);


  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
