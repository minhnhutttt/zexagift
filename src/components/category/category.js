import React, { useState, useEffect } from "react"
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Title from "../title";
import CategoryItem from "./categoryItem";

const Category = () => {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');

        const checkBreakpoint = (e) => {
            if (e.matches) {
                if (swiper === null) {
                    initSwiper();
                }
            } else if (swiper) {
                swiper.destroy(false, true);
                setSwiper(null);
            }
        };

        const initSwiper = () => {
            setSwiper(
                new Swiper('.swiper', {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                })
            );
        };

        mediaQuery.addListener(checkBreakpoint);
        checkBreakpoint(mediaQuery);

        return () => {
            mediaQuery.removeListener(checkBreakpoint);
            if (swiper) {
                swiper.destroy(false, true);
            }
        };
    }, [swiper]);

    return (
        <>
            <section className="md:mt-40 max-md:mt-32 max-md:px-[5%] max-md:py-0">
                <div className="max-w-[120rem] mx-auto">
                    <Title title="CATEGORY" text="商品カテゴリー" />
                    <div className="swiper">
                        <div className="flex flex-wrap list-box--col-4 md:[&>*:nth-child(-n+4)]:mt-0 [&>*:nth-child(4n)]:mr-0 swiper-wrapper">
                            <CategoryItem title="ギフトカード" />
                            <CategoryItem title="VRゴーグル" />
                            <CategoryItem title="コスメ・スキンケア" />
                            <CategoryItem title="雑貨" />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
