import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from "gatsby"
import Button from '../Button';

const Footer = () => {
    const windowSm = 768;

    useEffect(() => {
        const ftBody = document.querySelectorAll('.footer-box__item--body');
        const ftTitle = document.querySelectorAll('.footer-box__item--head');

        const handleTitleClick = (event) => {
            ftTitle.forEach((el) => {
                if (event.target !== el) {
                    el.classList.remove('is-open');
                    el.nextElementSibling.classList.remove('is-open');
                }
            });
            event.target.classList.toggle('is-open');
            event.target.nextElementSibling.classList.toggle('is-open');
        };

        ftBody.forEach((el) => {
            const height = el.scrollHeight;
            el.style.setProperty('--max-height', `${height}px`);
        });

        ftTitle.forEach((el) => {
            el.addEventListener('click', handleTitleClick);
        });

        return () => {
            ftTitle.forEach((el) => {
                el.removeEventListener('click', handleTitleClick);
            });
        };
    }, []);
    return (
        <footer className="mt-40 max-md:mt-32">
            <div className="flex justify-between px-0 py-32 border-t border-solid border-[rgba(172,172,172,0.3)] max-md:block max-md:px-[5%] max-md:py-8 max-w-[120rem] mx-auto">
                <div className="flex-[1] max-w-[25%] max-md:max-w-full">
                    <div className="max-w-[10rem] max-md:inline-block max-md:max-w-[8rem] max-md:align-middle max-md:mt-4 max-md:mb-12 max-md:mx-8">
                        <StaticImage src="../../images/common/footer_logo.png" alt="" />
                    </div>
                    <p className="text-[1.4rem] leading-[1.4] text-[#acacac] mt-6 max-md:text-[1.3rem] max-md:inline-block max-md:align-middle max-md:mb-0 max-md:mb-12">
                        東京都公安委員会<br />
                        第301002315433号<br />
                        株式会社ゼクサバース
                    </p>
                </div>
                <div className="flex-[1] max-w-[25%] max-md:max-w-full">
                    <h5 className="footer-box__item--head max-md:before:content-[''] max-md:before:absolute max-md:before:w-[1.2rem] max-md:before:h-[1.2rem] max-md:before:transition-opacity max-md:before:duration-[0.3s] max-md:before:ease-[ease] max-md:before:opacity-100 max-md:before:right-0 max-md:before:top-12 [&.is-open]:max-md:pb-8 font-bold [&.is-open]:max-md:before:rotate-180 text-[1.6rem] relative transition-[padding-bottom] duration-[0.3s] ease-[ease] max-md:px-0 max-md:py-12 max-md:border-t border-solid border-t-[rgba(172,172,172,0.3)]">SITE MAP</h5>
                    <ul className="mt-[0.8rem] [&>li]max-md::py-[1.3rem] [&>li]:pt-[1.2rem] max-md:overflow-hidden max-md:max-h-0 max-md:transition-[0.5s] max-md:duration-[ease] max-md:opacity-0 max-md:mt-0 footer-box__item--body [&.is-open]:max-md:max-h-[var(--max-height)] [&.is-open]:max-md:opacity-100 [&.is-open]:max-md:mb-8">
                        <li>
                            <Button to="/about/">ZEXAGIFTについて</Button>
                        </li>
                        <li>
                            <Button to="/collections/">商品カテゴリ</Button>
                        </li>
                        <li>
                            <Button to="#">新着情報</Button>
                        </li>
                        <li>
                            <Button to="#">BLOG</Button>
                        </li>
                        <li>
                            <Button to="/faq/">よくある質問</Button>
                        </li>
                        <li>
                            <Button to="#">お問い合わせ</Button>
                        </li>
                    </ul>
                </div>
                <div className="flex-[1] max-w-[25%] max-md:max-w-full">
                    <h5 className="footer-box__item--head max-md:before:content-[''] max-md:before:absolute max-md:before:w-[1.2rem] max-md:before:h-[1.2rem] max-md:before:transition-opacity max-md:before:duration-[0.3s] max-md:before:ease-[ease] max-md:before:opacity-100 max-md:before:right-0 max-md:before:top-12 [&.is-open]:max-md:pb-8 font-bold [&.is-open]:max-md:before:rotate-180 text-[1.6rem] relative transition-[padding-bottom] duration-[0.3s] ease-[ease] max-md:px-0 max-md:py-12 max-md:border-t border-solid border-t-[rgba(172,172,172,0.3)]">POLICY</h5>
                    <ul className="mt-[0.8rem] [&>li]max-md::py-[1.3rem] [&>li]:pt-[1.2rem] max-md:overflow-hidden max-md:max-h-0 max-md:transition-[0.5s] max-md:duration-[ease] max-md:opacity-0 max-md:mt-0 footer-box__item--body [&.is-open]:max-md:max-h-[var(--max-height)] [&.is-open]:max-md:opacity-100 [&.is-open]:max-md:mb-8">
                        <li>
                            <Button to="/policies/privacy-policy">プライバシーポリシー</Button>
                        </li>
                        <li>
                            <Button to="/policies/refund-policy">返金ポリシー</Button>
                        </li>
                        <li>
                            <Button to="/policies/delivery">送料について</Button>
                        </li>
                        <li>
                            <Button to="/policies/legal-notice">特定商取引法に基づく表記</Button>
                        </li>
                    </ul>
                </div>
                <div className="flex-[1] max-w-[25%] max-md:max-w-full">
                    <h5 className="footer-box__item--head max-md:before:content-[''] max-md:before:absolute max-md:before:w-[1.2rem] max-md:before:h-[1.2rem] max-md:before:transition-opacity max-md:before:duration-[0.3s] max-md:before:ease-[ease] max-md:before:opacity-100 max-md:before:right-0 max-md:before:top-12 [&.is-open]:max-md:pb-8 font-bold [&.is-open]:max-md:before:rotate-180 text-[1.6rem] relative transition-[padding-bottom] duration-[0.3s] ease-[ease] max-md:px-0 max-md:py-12 max-md:border-t border-solid border-t-[rgba(172,172,172,0.3)]">FOLLOW US</h5>
                    <ul className="flex gap-8 mt-8 max-md:mt-4 footer-box__item--body max-md:overflow-hidden max-md:max-h-0 max-md:transition-[0.5s] max-md:duration-[ease] max-md:opacity-0 footer-box__item--body [&.is-open]:max-md:max-h-[var(--max-height)] [&.is-open]:max-md:opacity-100 [&.is-open]:max-md:mb-8">
                        <li>
                            <Link to="https://twitter.com/zexaverse" target="_blank" className='transition-opacity duration-[0.3s] ease-[ease] opacity-40 hover:opacity-100'><StaticImage src="../../images/common/ico_tw.svg" alt="twitter" /></Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/zexaverse/" target="_blank" className='transition-opacity duration-[0.3s] ease-[ease] opacity-40 hover:opacity-100'><StaticImage src="../../images/common/ico_ig.svg" alt="instagram" /></Link>
                        </li>
                        <li>
                            <Link to="https://www.youtube.com/channel/UC57pmp0OQf7egnTeecFRLTg/videos" target="_blank" className='transition-opacity duration-[0.3s] ease-[ease] opacity-40 hover:opacity-100'><StaticImage src="../../images/common/ico_yt.svg" alt="youtube" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-0 py-8 border-t max-md:text-center max-md:mx-[5%] max-md:my-0 max-md:px-0 max-md:py-12 border-t-[rgba(172,172,172,0.3)] max-w-[120rem] mx-auto">
                <p className="text-[1.2rem] text-[#acacac]">&copy; 2023 <Link to="/" title="" className='underline text-[#0568d6]'>ZEXAGIFT</Link></p>
            </div>
        </footer>
    )
}

export default Footer
