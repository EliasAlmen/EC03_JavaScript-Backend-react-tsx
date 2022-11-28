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
import { useEffect, useState } from 'react';
import { ProductContext, FeaturedContext, FlashsaleContext, RankingContext, RelatedContext } from './contexts/contexts'
import { ShoppingCartProvider } from './contexts/shoppingCartContext';
import CrudView from './views/CrudView';
import CrudProvider from './contexts/CrudContext';
import CrudDetailView from './views/CrudDetailView';


function App() {

  // UseStates to fetch and set with data from API
  const [productsAll, setProductsAll] = useState([])
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [flashSaleProducts, setFlashSaleProducts] = useState([])
  const [rankingProducts, setRankingProducts] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([])
  
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

    const fetchRelatedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=1')
      setRelatedProducts(await result.json())
    }
    fetchRelatedProducts();

  }, [setProductsAll, setFeaturedProducts, setFlashSaleProducts, setRankingProducts, setRelatedProducts])


  return (
    <BrowserRouter>
      <CrudProvider>
      <ShoppingCartProvider>
      <ProductContext.Provider value={productsAll}>
      <FeaturedContext.Provider value={featuredProducts}>
      <FlashsaleContext.Provider value={flashSaleProducts}>
      <RankingContext.Provider value={rankingProducts}>
      <RelatedContext.Provider value={relatedProducts}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          
          <Route path="/crud/:id" element={<CrudDetailView />} />
          <Route path="/crud" element={<CrudView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </RelatedContext.Provider>
      </RankingContext.Provider>
      </FlashsaleContext.Provider>
      </FeaturedContext.Provider>
      </ProductContext.Provider>
      </ShoppingCartProvider>
      </CrudProvider>
    </BrowserRouter>
  );
}

export default App;
