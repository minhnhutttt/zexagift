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
                <div className={`cart-drawer fixed z-[100] invisible overflow-hidden transition-[0.3s] duration-[ease] opacity-0 bg-[rgba(172,172,172,0.3)] inset-0 ${show ? ' is-open' : ''}`}>
                <div className="fixed inset-0" onClick={handleClose}></div>
                    <div className="cart-drawer__empty flex items-center flex-col justify-center w-[48rem] h-full transition-[0.3s] duration-[ease] translate-x-full text-center ml-auto bg-[#080d1b] max-md:w-[calc(100%-60px)] max-md:max-w-[330px]">
                        <div className="absolute flex items-center justify-center w-8 cursor-pointer right-8 top-8 max-md:absolute max-md:w-8 max-md:opacity-100 max-md:right-8 max-md:top-8" onClick={handleClose}>
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                            </svg>
                        </div>
                    <div className="cart-drawer__empty--icon">
                            <svg className="w-12 h-12 opacity-40 theme-icon max-md:w-[38px] max-md:h-[38px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.70718 2.70718L5.41424 6.00012H14.5858L11.2928 2.70718L12.707 1.29297L17.4142 6.00012H20L18 18.0001H2L0 6.00012H2.58582L7.29297 1.29297L8.70718 2.70718ZM2.36092 8.00012L3.69425 16.0001H16.3057L17.6391 8.00012H2.36092Z" fill="#acacac"></path>
                        </svg>
                    </div>
                        <h2 className="text-[2.8rem] mt-8 mb-16 max-md:text-[2rem] max-md:leading-[1.4]">カート内に商品がありません。</h2>
                    <button className="text-[1.6rem] font-semibold relative cursor-pointer text-white appearance-none px-10 py-[1.3rem] border-[none] hover:before:scale-[1.05] content-[''] before:absolute  before:transition-transform before:duration-[0.3s] before:ease-[ease] before:rounded-[0.8rem] before:inset-0  before:bg-[#494676] " type="button" onClick={handleClose}>
                        <span className="relative">ショッピングを続ける</span>
                    </button>
                        <h3 className="text-[2.4rem] mt-16 max-md:text-[1.8rem]">アカウントを持っていますか。</h3>
                        <p className="text-[1.6rem] mt-8 max-md:text-2xl">IDでもっと便利に<Link to="/account/login" className="link">ログイン</Link></p>
                </div>
            </div>
            :
                <div className={`cart-drawer fixed z-[100] invisible overflow-hidden transition-[0.3s] duration-[ease] opacity-0 bg-[rgba(172,172,172,0.3)] inset-0  ${show ? ' is-open' : ''}`}>
                    <div className="fixed inset-0" onClick={handleClose}></div>
                    <div className="cart-drawer__content flex overflow-scroll flex-col justify-between w-[48rem] h-full transition-[0.3s] duration-[ease] translate-x-full ml-auto p-16 bg-[#080d1b] max-md:block max-md:h-full max-md:w-[calc(100%_-_60px)] max-md:max-w-[330px] max-md:ml-auto max-md:px-[5%] max-md:py-12">
                        <div className="flex items-center justify-center w-8 cursor-pointer right-8 top-8 absolute max-md:w-8 max-md:opacity-100 max-md:right-8 max-md:top-8" onClick={handleClose}>
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                            </svg>
                        </div>
                        <h5 className="text-5xl text-left mt-8 mb-24 mx-0 max-md:text-[2.4rem] max-md:mt-12 max-md:mb-16">お客様のカート</h5>
                        <div className="overflow-scroll flex-[1]">
                            <CartDrawerItem />
                            <CartDrawerItem />
                        </div>
                        <dl className="border-b border-b-[rgba(172,172,172,0.3)] ">
                            <dt className="px-0 py-12 border-t border-t-[rgba(172,172,172,0.3)] max-md:px-0 max-md:py-8 request-summary ac-summary hover:before:opacity-100 [&.is-open]:before:rotate-180 [&.is-open]:pb-8 before:content-[''] before:absolute before:w-[1.2rem] before:h-[1.2rem] before:opacity-40 before:transition-opacity before:duration-[0.3s] before:ease-[ease] before:right-0 before:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer pb-12 max-md:before:top-[2.4rem] before:rotate-180">
                                <h4 className="text-[1.6rem] font-semibold leading-[1.4">要請事項</h4>
                            </dt>
                            <dd className="relative transition-[0.3s] duration-[ease] overflow-hidden ac-content [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100 max-h-[var(--max-height)] opacity-100 pb-12 max-md:pb-8">
                                <textarea name="text" className="request-content__input" placeholder=" "></textarea>
                                <label className="absolute transition-[0.1s] duration-[ease] -translate-y-2/4 origin-[left_center] text-[#acacac] left-6 top-[2.4rem]" for="request-input">要請事項</label>
                            </dd>
                        </dl>
                        <div className="cart-drawer__footer">
                            <div className="flex justify-between tracking-[0.04em] mt-12 mb-4 mx-0 max-md:items-center max-md:mt-8">
                                <h3 className="text-[2.4rem] max-md:text-[2rem]">小計</h3>
                                <p className="text-[2.4rem] font-semibold max-md:text-[2em]">¥5,000 JPY</p>
                            </div>
                            <p className="text-[1.2rem] leading-[1.4] mb-12 max-md:mb-8">税込、配送料はチェックアウト時に計算されます</p>
                            <div className="terms-check">
                                <div className="flex items-center mb-10 max-md:mb-8">
                                    <label className="w-auto mr-4 pt-0 check-box">
                                        <input className="check-box__input" type="checkbox" id="terms-confirm" onChange={handleCheckBox} />
                                        <span className="check-box__marker"></span>
                                        <span className="check-box__title"><Link to="#" className="link">規約と条件</Link> に同意します</span>
                                    </label>
                                </div>
                                <button type="submit" className="text-[1.6rem] font-semibold relative cursor-pointer text-white appearance-none px-10 py-[1.3rem] border-[none] hover:before:scale-x-[1.02] hover:before:scale-y-[1.05] content-[''] before:absolute  before:transition-transform before:duration-[0.3s] before:ease-[ease] before:rounded-[0.8rem] before:inset-0  before:bg-[#494676] block w-full transition-opacity duration-[0.3s] ease-[ease] opacity-100 disabled:opacity-40 disabled:pointer-events-none" id="terms-submit" name="checkout" disabled>
                                    <span className="relative">チェックアウト</span>
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
