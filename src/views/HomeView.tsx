import React, { useEffect } from "react";
import { ProductContextType, useProductContext } from "../contexts/PredefinedProductContext";
// import { FeaturedContext, FlashsaleContext, RankingContext, } from "../contexts/SwaggerApicontexts";
import Banner1Section from "../sections/Banner1Section";
import Banner2Section from "../sections/Banner2Section";
import Banner3Section from "../sections/Banner3Section";
import FlashSaleLeftSection from "../sections/FlashSaleLeftSection";
import FlashSaleRightSection from "../sections/FlashSaleRightSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import ProductFeaturedSection from "../sections/ProductFeaturedSection";
import ProductRankingSection from "../sections/ProductRankingSection";
import PromisesSection from "../sections/PromisesSection";
import ShowCaseSection from "../sections/ShowCaseSection";
import SpecialitySection from "../sections/SpecialitySection";

const HomeView: React.FC = () => {
    let currentPage = "Home";
    document.title = `${currentPage} || Fixxo`;

    // const featuredContext: any = useContext(FeaturedContext);
    // const flashsaleContext: any = useContext(FlashsaleContext);
    // const rankingContext: any = useContext(RankingContext);

    const { 
        featured, 
        flashsaleOne,
        flashsaleTwo,
        rankingOne,
        getFeatured,
        getFlashsaleOne,
        getFlashsaleTwo,
        getRankingOne,
    } = useProductContext() as ProductContextType

    useEffect(() => {
        getFeatured(8)
        getFlashsaleOne(4)
        getFlashsaleTwo(4)
        getRankingOne(3)
    }, [])

    return (
        <>
            <HeaderSection />
            <ShowCaseSection />
            <Banner1Section />
            <ProductFeaturedSection title={"Featured Products"} items={featured} />
            <Banner2Section />
            <SpecialitySection />
            <FlashSaleLeftSection items={flashsaleOne} />
            <FlashSaleRightSection items={flashsaleTwo} />
            <Banner3Section />
            <ProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} items={rankingOne} />
            <PromisesSection />
            <FooterSection />
        </>
    );
};

export default HomeView;
