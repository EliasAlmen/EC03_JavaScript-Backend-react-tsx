import React, { useContext } from "react";
import { ProductContext } from "../contexts/SwaggerApicontexts";
import BreadCrumbsSection from "../sections/BreadCrumbsSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import SearchSection from "../sections/SearchSection";

const SearchView: React.FC = () => {
    let currentPage = "Search";
    document.title = `${currentPage} || Fixxo`;
    const productContext: any = useContext(ProductContext);

    return (
        <>
            <HeaderSection />
            <BreadCrumbsSection />
            <SearchSection items={productContext} />
            <FooterSection />
        </>
    );
};

export default SearchView;
