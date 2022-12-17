import React, { useEffect, useState } from "react";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";
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

    const {
        mongoFeatured,
        mongoFlashsaleOne,
        mongoFlashsaleTwo,
        mongoRankingOne,
        mongoRankingTwo,
        mongoRankingThree,
        mongoGetFeatured,
        mongoGetFlashsaleOne,
        mongoGetFlashsaleTwo,
        mongoGetRankingOne,
        mongoGetRankingTwo,
        mongoGetRankingThree
    } = useMongoContext() as MongoContextType

    useEffect(() => {
        getFeatured(4)
        getFlashsaleOne(4)
        getFlashsaleTwo(4)
        getRankingOne(3)
        getRankingTwo(3)
        getRankingThree(3)
        mongoGetFeatured(3)
        mongoGetFlashsaleOne(3)
        mongoGetFlashsaleTwo(3)
        mongoGetRankingOne(2)
        mongoGetRankingTwo(2)
        mongoGetRankingThree(2)
    }, [])

    const [mongoDB, setMongoDB] = useState(false)
    const [databaseButton, setdatabaseButton] = useState('mongoDB')
    const handleClick = (e: any) => {
        setMongoDB(!mongoDB)
        setdatabaseButton(mongoDB ? 'mongoDB' : 'Simulated')
    };

    return (
        <>
            <HeaderSection />
            <span className="d-flex justify-content-center sticky-top"><button type="button" className="btn btn-secondary" onClick={handleClick}>{databaseButton}</button></span>
            <ShowCaseSection />
            <Banner1Section />
            {mongoDB ? <ProductFeaturedSection title={"Featured Products"} items={featured} /> : <ProductFeaturedSection title={"Featured Products"} items={mongoFeatured} />}
            <Banner2Section />
            <SpecialitySection />
            {mongoDB ? <FlashSaleLeftSection items={flashsaleTwo} /> : <FlashSaleLeftSection items={mongoFlashsaleOne} />}
            {mongoDB ? <FlashSaleRightSection items={flashsaleOne} /> : <FlashSaleRightSection items={mongoFlashsaleTwo} />}
            <Banner3Section />
            {
                mongoDB ?
                    <ProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} itemsOne={rankingOne} itemsTwo={rankingTwo} itemsThree={rankingThree} />
                    :
                    <ProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} itemsOne={mongoRankingThree} itemsTwo={mongoRankingOne} itemsThree={mongoRankingTwo} />
            }
            
            <PromisesSection />
            <FooterSection />
        </>
    );
};

export default HomeView;
