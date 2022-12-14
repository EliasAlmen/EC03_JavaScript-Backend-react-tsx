import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import ProductRelatedComponent from "../components/ProductRelatedComponent";
import { RelatedContext } from "../contexts/SwaggerApicontexts";

const ProductRelatedSection: React.FC = () => {
    
    const relatedContext: any = useContext(RelatedContext);

    
    return (

        <div className="related-products mt-5">
            <div id="related">Related Products</div>
            {/* SWIPER IS NICE */}
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductRelatedComponent items={relatedContext} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductRelatedSection;
