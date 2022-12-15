import React, { useEffect, useState } from "react";
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

    const {
        featured,
        flashsaleOne,
        flashsaleTwo,
        rankingOne,
        rankingTwo,
        rankingThree,
        getFeatured,
        getFlashsaleOne,
        getFlashsaleTwo,
        getRankingOne,
        getRankingTwo,
        getRankingThree
    } = useProductContext() as ProductContextType

    useEffect(() => {
        getFeatured(4)
        getFlashsaleOne(4)
        getFlashsaleTwo(4)
        getRankingOne(3)
        getRankingTwo(3)
        getRankingThree(3)
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
            <ProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} itemsOne={rankingOne} itemsTwo={rankingTwo} itemsThree={rankingThree} />
            <PromisesSection />
            <FooterSection />
        </>
    );
};

export default HomeView;
