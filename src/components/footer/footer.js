import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from "gatsby"

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
        <footer className="footer">
            <div className="footer-box inner">
                <div className="footer-box__item">
                    <div className="footer-box__item--logo">
                        <StaticImage src="../../images/common/footer_logo.png" alt="" />
                    </div>
                    <p className="footer-box__item--detail">
                        東京都公安委員会<br />
                        第301002315433号<br />
                        株式会社ゼクサバース
                    </p>
                </div>
                <div className="footer-box__item">
                    <h5 className="footer-box__item--head">SITE MAP</h5>
                    <ul className="footer-box__item--list footer-box__item--body">
                        <li>
                            <Link to="/about/" className="line-btn">ZEXAGIFTについて</Link>
                        </li>
                        <li>
                            <Link to="/collections/" className="line-btn">商品カテゴリ</Link>
                        </li>
                        <li>
                            <Link to="#" className="line-btn">新着情報</Link>
                        </li>
                        <li>
                            <Link to="#" className="line-btn">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/faq/" className="line-btn">よくある質問</Link>
                        </li>
                        <li>
                            <Link to="#" className="line-btn">お問い合わせ</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-box__item">
                    <h5 className="footer-box__item--head">POLICY</h5>
                    <ul className="footer-box__item--list footer-box__item--body">
                        <li>
                            <Link to="/policies/privacy-policy" className="line-btn">プライバシーポリシー</Link>
                        </li>
                        <li>
                            <Link to="/policies/refund-policy" className="line-btn">返金ポリシー</Link>
                        </li>
                        <li>
                            <Link to="/policies/delivery" className="line-btn">送料について</Link>
                        </li>
                        <li>
                            <Link to="/policies/legal-notice" className="line-btn">特定商取引法に基づく表記</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-box__item">
                    <h5 className="footer-box__item--head">FOLLOW US</h5>
                    <ul className="footer-box__item--sns footer-box__item--body">
                        <li>
                            <Link to="https://twitter.com/zexaverse" target="_blank"><StaticImage src="../../images/common/ico_tw.svg" alt="twitter" /></Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/zexaverse/" target="_blank"><StaticImage src="../../images/common/ico_ig.svg" alt="instagram" /></Link>
                        </li>
                        <li>
                            <Link to="https://www.youtube.com/channel/UC57pmp0OQf7egnTeecFRLTg/videos" target="_blank"><StaticImage src="../../images/common/ico_yt.svg" alt="youtube" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copy inner">
                <p className="footer-copy__content">&copy; 2023 <Link to="/" title="">ZEXAGIFT</Link></p>
            </div>
        </footer>
    )
}

export default Footer
