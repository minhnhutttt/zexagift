import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"
import CartDrawerItem from './cartDrawerItem';

const CartDrawer = ({ show, handleClose, empty = true }) => {

    const handleCheckBox = (event) => {
        const submitButton = document.getElementById('terms-submit');
        if (event.target.checked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
    return (
        <>
        {empty ?
            <div className={`cart-drawer ${show ? ' is-open' : ''}`}>
                <div className="fixed inset-0" onClick={handleClose}></div>
                <div className="cart-drawer__empty">
                    <div className="cart-drawer__close" onClick={handleClose}>
                        <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                        </svg>
                    </div>
                    <div className="cart-drawer__empty--icon">
                        <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.70718 2.70718L5.41424 6.00012H14.5858L11.2928 2.70718L12.707 1.29297L17.4142 6.00012H20L18 18.0001H2L0 6.00012H2.58582L7.29297 1.29297L8.70718 2.70718ZM2.36092 8.00012L3.69425 16.0001H16.3057L17.6391 8.00012H2.36092Z" fill="#acacac"></path>
                        </svg>
                    </div>
                    <h2 className="cart-drawer__empty--title">カート内に商品がありません。</h2>
                    <button className="zoom-btn" type="button" onClick={handleClose}>
                        <span>ショッピングを続ける</span>
                    </button>
                    <h3 className="cart-drawer__empty--subtitle">アカウントを持っていますか。</h3>
                    <p className="cart-drawer__empty--text">IDでもっと便利に<Link to="/account/login" className="link">ログイン</Link></p>
                </div>
            </div>
            :
                <div className={`cart-drawer ${show ? ' is-open' : ''}`}>
                    <div className="fixed inset-0" onClick={handleClose}></div>
                    <div className="cart-drawer__content">
                        <div className="cart-drawer__close" onClick={handleClose}>
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                            </svg>
                        </div>
                        <h5 className="cart-drawer__title">お客様のカート</h5>
                        <div className="cart-drawer__product">
                            <CartDrawerItem />
                            <CartDrawerItem />
                        </div>
                        <dl className="cart-drawer__request">
                            <dt className="request-summary ac-summary is-open">
                                <h4 className="request-summary__head">要請事項</h4>
                            </dt>
                            <dd className="request-content ac-content is-open">
                                <textarea name="text" className="request-content__input" placeholder=" "></textarea>
                                <label className="request-content__label" for="request-input">要請事項</label>
                            </dd>
                        </dl>
                        <div className="cart-drawer__footer">
                            <div className="totals">
                                <h3 className="totals__sub">小計</h3>
                                <p className="totals__val">¥5,000 JPY</p>
                            </div>
                            <p className="tax-note">税込、配送料はチェックアウト時に計算されます</p>
                            <div className="terms-check">
                                <div className="terms-check__item">
                                    <label className="terms-check__item--label check-box">
                                        <input className="check-box__input" type="checkbox" id="terms-confirm"  onChange={handleCheckBox} />
                                        <span className="check-box__marker"></span>
                                        <span className="check-box__title"><Link to="#" className="link">規約と条件</Link> に同意します</span>
                                    </label>
                                </div>
                                <button type="submit" className="zoom-btn zoom-btn--full" id="terms-submit" name="checkout" disabled>
                                    <span>チェックアウト</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CartDrawer
