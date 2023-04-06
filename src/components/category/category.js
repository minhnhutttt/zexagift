import React, { useState, useEffect } from "react"
import { StaticImage } from 'gatsby-plugin-image';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Link } from "gatsby"

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
            <section className="section">
                <div className="inner">
                    <h2 className="section-title">CATEGORY<span>商品カテゴリー</span></h2>
                    <div className="swiper">
                        <div className="list-box list-box--col-4 swiper-wrapper">
                            <div className="list-box__item swiper-slide">
                                <Link to="#">
                                    <figure className="list-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    </figure>
                                    <p className="list-box__item--title">
                                        <span>ギフトカード</span>
                                    </p>
                                </Link>
                            </div>
                            <div className="list-box__item swiper-slide">
                                <Link to="#">
                                    <figure className="list-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    </figure>
                                    <p className="list-box__item--title">
                                        <span>VRゴーグル</span>
                                    </p>
                                </Link>
                            </div>
                            <div className="list-box__item swiper-slide">
                                <Link to="#">
                                    <figure className="list-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    </figure>
                                    <p className="list-box__item--title">
                                        <span>コスメ・スキンケア</span>
                                    </p>
                                </Link>
                            </div>
                            <div className="list-box__item swiper-slide">
                                <Link to="#">
                                    <figure className="list-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    </figure>
                                    <p className="list-box__item--title">
                                        <span>雑貨</span>
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
