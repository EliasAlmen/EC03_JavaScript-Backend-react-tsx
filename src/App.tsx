import "./main.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactsView from "./views/ContactsView";
import HomeView from "./views/HomeView";
import NotFoundView from "./views/NotFoundView";
import CategoriesView from "./views/CategoriesView";
import ProductsView from "./views/ProductsView";
import ProductDetailsView from "./views/ProductDetailsView";
import SearchView from "./views/SearchView";
import CompareView from "./views/CompareView";
import WishListView from "./views/WishListView";
import { useEffect, useState } from "react";
import {
    ProductContext,
    FeaturedContext,
    FlashsaleContext,
    RankingContext,
    RelatedContext,
} from "./contexts/SwaggerApicontexts";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import CrudView from "./views/CrudView";
import CrudProvider from "./contexts/CrudContext";
import ScrollToTop from "./utils/ScrollToTop";
import CrudUpdateView from "./views/CrudUpdateView";
import CrudDetailView from "./views/CrudDetailView";
import ProductProvider from "./contexts/PredefinedProductContext";
import MongoView from "./views/MongoView";
import MongoProvider from "./contexts/MongoContext";
import MongoUpdateView from "./views/MongoUpdateView";
import MongoDetailView from "./views/MongoDetailView";

function App() {
    // UseStates to fetch and set with data from API
    const [productsAll, setProductsAll] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [flashSaleProducts, setFlashSaleProducts] = useState([]);
    const [rankingProducts, setRankingProducts] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            let result = await fetch(
                "https://win22-webapi.azurewebsites.net/api/products"
            );
            setProductsAll(await result.json());
        };
        fetchAllProducts();

        const fetchFeaturedProducts = async () => {
            let result = await fetch(
                "https://win22-webapi.azurewebsites.net/api/products?take=8"
            );
            setFeaturedProducts(await result.json());
        };
        fetchFeaturedProducts();

        const fetchFlashSaleProducts = async () => {
            let result = await fetch(
                "https://win22-webapi.azurewebsites.net/api/products?take=4"
            );
            setFlashSaleProducts(await result.json());
        };
        fetchFlashSaleProducts();

        const fetchRankingProducts = async () => {
            let result = await fetch(
                "https://win22-webapi.azurewebsites.net/api/products?take=3"
            );
            setRankingProducts(await result.json());
        };
        fetchRankingProducts();

        const fetchRelatedProducts = async () => {
            let result = await fetch(
                "https://win22-webapi.azurewebsites.net/api/products?take=1"
            );
            setRelatedProducts(await result.json());
        };
        fetchRelatedProducts();
    }, [
        setProductsAll,
        setFeaturedProducts,
        setFlashSaleProducts,
        setRankingProducts,
        setRelatedProducts,
    ]);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <MongoProvider>
                <CrudProvider>
                    <ProductProvider>
                        <ShoppingCartProvider>
                            <ProductContext.Provider value={productsAll}>
                                <FeaturedContext.Provider value={featuredProducts}>
                                    <FlashsaleContext.Provider value={flashSaleProducts}>
                                        <RankingContext.Provider value={rankingProducts}>
                                            <RelatedContext.Provider value={relatedProducts}>
                                                <Routes>
                                                    <Route
                                                        path="/"
                                                        element={<HomeView />}
                                                    />
                                                    <Route
                                                        path="/categories"
                                                        element={<CategoriesView />}
                                                    />
                                                    <Route
                                                        path="/products"
                                                        element={<ProductsView />}
                                                    />
                                                    <Route
                                                        path="/products/:id"
                                                        element={<ProductDetailsView />}
                                                    />
                                                    <Route
                                                        path="/contacts"
                                                        element={<ContactsView />}
                                                    />
                                                    <Route
                                                        path="/crudupdate/:id"
                                                        element={<CrudUpdateView />}
                                                    />
                                                    <Route
                                                        path="/cruddetail/:id"
                                                        element={<CrudDetailView />}
                                                    />
                                                    <Route
                                                        path="/crud"
                                                        element={<CrudView />}
                                                    />
                                                    <Route
                                                        path="/mongo"
                                                        element={<MongoView />}
                                                    />
                                                    <Route
                                                        path="/mongo/details/:id"
                                                        element={<MongoDetailView />}
                                                    />
                                                    <Route
                                                        path="/mongo/update/:id"
                                                        element={<MongoUpdateView />}
                                                    />
                                                    <Route
                                                        path="/search"
                                                        element={<SearchView />}
                                                    />
                                                    <Route
                                                        path="/compare"
                                                        element={<CompareView />}
                                                    />
                                                    <Route
                                                        path="/wishlist"
                                                        element={<WishListView />}
                                                    />
                                                    <Route
                                                        path="*"
                                                        element={<NotFoundView />}
                                                    />
                                                </Routes>
                                            </RelatedContext.Provider>
                                        </RankingContext.Provider>
                                    </FlashsaleContext.Provider>
                                </FeaturedContext.Provider>
                            </ProductContext.Provider>
                        </ShoppingCartProvider>
                    </ProductProvider>

                </CrudProvider>
            </MongoProvider>

        </BrowserRouter>
    );
}

export default App;
