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
import { ProductContext, FeaturedContext, FlashsaleContext, RankingContext } from './contexts/contexts'
import { ShoppingCartProvider } from './contexts/shoppingCartContext';


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


  // const [products, setProducts] = useState({
  //   // allProducts: [],
  //   featuredProducts: [],
  //   // flashSaleProducts: [],
  //   // rankingProducts: []
  // })

  const [productsAll, setProductsAll] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [flashSaleProducts, setFlashSaleProducts] = useState([])
  const [rankingProducts, setRankingProducts] = useState([])
  
  useEffect(() =>{
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProductsAll(await result.json())
    }
    fetchAllProducts();

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeaturedProducts(await result.json())
    }
    fetchFeaturedProducts()

    const fetchFlashSaleProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setFlashSaleProducts(await result.json())
    }
    fetchFlashSaleProducts();

    const fetchRankingProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=3')
      setRankingProducts(await result.json())
    }
    fetchRankingProducts();

  }, [setProductsAll, setFeaturedProducts, setFlashSaleProducts, setRankingProducts])


  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductContext.Provider value={productsAll}>
      <FeaturedContext.Provider value={featuredProducts}>
      <FlashsaleContext.Provider value={flashSaleProducts}>
      <RankingContext.Provider value={rankingProducts}>
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
      </RankingContext.Provider>
      </FlashsaleContext.Provider>
      </FeaturedContext.Provider>
      </ProductContext.Provider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
