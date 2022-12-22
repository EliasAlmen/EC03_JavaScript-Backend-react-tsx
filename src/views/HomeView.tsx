import React, { useContext, useEffect, useState } from "react";
import { MongoContextType, useMongoContext } from "../contexts/MongoContext";
import { ProductContextType, useProductContext } from "../contexts/PredefinedProductContext";
import { FeaturedContext, FlashsaleContext, RankingContext } from "../contexts/SwaggerApicontexts";
import Banner1Section from "../sections/Banner1Section";
import Banner2Section from "../sections/Banner2Section";
import Banner3Section from "../sections/Banner3Section";
import FlashSaleLeftSection from "../sections/FlashSaleLeftSection";
import FlashSaleRightSection from "../sections/FlashSaleRightSection";
import FooterSection from "../sections/FooterSection";
import GraphQlFlashSaleLeftSection from "../sections/GraphQlFlashSaleLeftSection";
import GraphQlFlashSaleRightSection from "../sections/GraphQlFlashSaleRightSection";
import GraphQlProductFeaturedSection from "../sections/GraphQlProductFeaturedSection";
import GraphQlProductRankingSection from "../sections/GraphQlProductRankingSection";
import HeaderSection from "../sections/HeaderSection";
import MongoFlashSaleLeftSection from "../sections/MongoFlashSaleLeftSection";
import MongoFlashSaleRightSection from "../sections/MongoFlashSaleRightSection";
import MongoProductFeaturedSection from "../sections/MongoProductFeaturedSection";
import MongoProductRankingSection from "../sections/MongoProductRankingSection";
import PredefinedFlashSaleLeftSection from "../sections/PredefinedFlashSaleLeftSection";
import PredefinedFlashSaleRightSection from "../sections/PredefinedFlashSaleRightSection";
import PredefinedProductFeaturedSection from "../sections/PredefinedProductFeaturedSection";
import PredefinedProductRankingSection from "../sections/PredefinedProductRankingSection";
import ProductFeaturedSection from "../sections/ProductFeaturedSection";
import ProductRankingSection from "../sections/ProductRankingSection";
import PromisesSection from "../sections/PromisesSection";
import ShowCaseSection from "../sections/ShowCaseSection";
import SpecialitySection from "../sections/SpecialitySection";

const HomeView: React.FC = () => {
    let currentPage = "Home";
    document.title = `${currentPage} || Fixxo`;

    // SWAGGER API
    const featuredContext: any = useContext(FeaturedContext);
    const flashsaleContext: any = useContext(FlashsaleContext);
    const rankingContext: any = useContext(RankingContext);

    // Predefined API
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

    // MongoDB API
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

    // The actucal fetches
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

    // States for buttons and which component to display!
    const [displayA, setDisplayA] = useState(true);
    const [displayB, setDisplayB] = useState(false);
    const [displayC, setDisplayC] = useState(false);
    const [displayD, setDisplayD] = useState(false);

    const showA = () => {
        setDisplayA(true);
        setDisplayB(false);
        setDisplayC(false);
        setDisplayD(false);
    }
    const showB = () => {
        setDisplayA(false);
        setDisplayB(true);
        setDisplayC(false);
        setDisplayD(false);
    };
    const showC = () => {
        setDisplayA(false);
        setDisplayB(false);
        setDisplayC(true);
        setDisplayD(false);
    };
    const showD = () => {
        setDisplayA(false);
        setDisplayB(false);
        setDisplayC(false);
        setDisplayD(true);
    };

    return (
        <>
            <HeaderSection />
            <span className="d-flex justify-content-center sticky-top">
                <button type="button" className="btn btn-secondary" onClick={showA}>MongoDB</button>
                <button type="button" className="btn btn-secondary" onClick={showB}>Predefined</button>
                <button type="button" className="btn btn-secondary" onClick={showC}>GraphQL</button>
                <button type="button" className="btn btn-secondary" onClick={showD}>Swagger</button>
            </span>
            <ShowCaseSection />
            <Banner1Section />
            {displayA && <MongoProductFeaturedSection title={"Featured Products"} items={mongoFeatured} />}
            {displayB && <PredefinedProductFeaturedSection title={"Featured Products"} items={featured} />}
            {displayC && <GraphQlProductFeaturedSection title={"Featured Products"} />}
            {displayD && <ProductFeaturedSection title={"Featured Products"} items={featuredContext} />}
            <Banner2Section />
            <SpecialitySection />
            {displayA && <MongoFlashSaleLeftSection items={mongoFlashsaleOne} />}
            {displayA && <MongoFlashSaleRightSection items={mongoFlashsaleTwo} />}
            {displayB && <PredefinedFlashSaleLeftSection items={flashsaleTwo} /> }
            {displayB && <PredefinedFlashSaleRightSection items={flashsaleOne} /> }
            {displayC && <GraphQlFlashSaleLeftSection /> }
            {displayC && <GraphQlFlashSaleRightSection /> }
            {displayD && <FlashSaleLeftSection items={flashsaleContext} /> }
            {displayD && <FlashSaleRightSection items={flashsaleContext} /> }
            <Banner3Section />
            {displayA && <MongoProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} itemsOne={mongoRankingThree} itemsTwo={mongoRankingOne} itemsThree={mongoRankingTwo} />}
            {displayB && <PredefinedProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} itemsOne={rankingOne} itemsTwo={rankingTwo} itemsThree={rankingThree} />}
            {displayC && <GraphQlProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} />}
            {displayD && <ProductRankingSection title1={"Latest Product"} title2={"Best Selling Product"} title3={"Top Reacted Product"} items={rankingContext} />}
            <PromisesSection />
            <FooterSection />
        </>
    );
};

export default HomeView;
