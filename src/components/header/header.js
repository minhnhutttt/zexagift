import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header id="header" class="header">
    <div class="header-top inner">
      <div class="mobile-hamburger">
        <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="20" height="2" fill="#acacac"></rect>
          <rect y="12" width="20" height="2" fill="#acacac"></rect>
        </svg>
      </div>
      <h1 class="header-top__logo">
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="184px" height="38px" xmlnsXlink="http://www.w3.org/1999/xlink">
            <image
              x="0px"
              y="0px"
              width="184px"
              height="38px"
              xlinkHref="data:img/png;base64,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"
            ></image>
          </svg>
        </a>
      </h1>
      <div class="mobile-cart-btn">
        <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70718 2.70718L5.41424 6.00012H14.5858L11.2928 2.70718L12.707 1.29297L17.4142 6.00012H20L18 18.0001H2L0 6.00012H2.58582L7.29297 1.29297L8.70718 2.70718ZM2.36092 8.00012L3.69425 16.0001H16.3057L17.6391 8.00012H2.36092Z" fill="#acacac"></path>
        </svg>
      </div>
      <nav class="g-nav">
        <div class="mobile-close">
          <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
          </svg>
        </div>
        <div class="search-form mobile-search-form">
          <form action="" class="search-form__item">
            <input type="text" id="search-input" class="search-form__item--input" placeholder=" " />
            <label class="search-form__item--label" for="search-input">Search</label>
          </form>
        </div>
        <div class="mobile-nav">
          <ul class="mobile-nav__list">
            <li class="mobile-nav__list--item">
              <a href="/collections/category.html">ギフトカード</a>
            </li>
            <li class="mobile-nav__list--item">
              <a href="#">VRゴーグル</a>
            </li>
            <li class="mobile-nav__list--item">
              <a href="#">コスメ・スキンケア</a>
            </li>
            <li class="mobile-nav__list--item">
              <a href="#">雑貨</a>
            </li>
          </ul>
        </div>
        <ul class="g-nav__list">
          <li class="g-nav__list__item">
            <a href="/about/">ZEXAGIFTについて</a>
          </li>
          <li class="g-nav__list__item">
            <a href="/collections/" class="line-btn">商品カテゴリ</a>
          </li>
          <li class="g-nav__list__item">
            <a href="#" class="line-btn">新着情報</a>
          </li>
          <li class="g-nav__list__item">
            <a href="#" class="line-btn">BLOG</a>
          </li>
          <li class="g-nav__list__item">
            <a href="/faq/" class="line-btn">よくある質問</a>
          </li>
          <li class="g-nav__list__item">
            <a href="#" class="line-btn">お問い合わせ</a>
          </li>
        </ul>
        <ul class="g-nav__detail">
          <li class="g-nav__detail__item">
            <a href="#" class="g-nav__detail__item--mypage">
              <img src="/img/common/ico_mypage.svg" alt="mypage" />
            </a>
          </li>
          <li class="g-nav__detail__item">
            <a tabindex="-1" class="g-nav__detail__item--cart cart-btn">
              <img src="/img/common/ico_cart.svg" alt="cart" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header-bottom inner">
      <div class="vertical-menu">
        <div class="vertical-menu__hamburger">
          <span class="vertical-menu__hamburger--top"></span>
          <span class="vertical-menu__hamburger--bottom"></span>
        </div>
        <div class="vertical-menu__btn">
          <span>ショッピング</span>
        </div>
        <div class="vertical-menu__nav">
          <ul class="vertical-menu__nav__list">
            <li class="vertical-menu__nav__list--item">
              <a href="#">ギフトカード</a>
            </li>
            <li class="vertical-menu__nav__list--item">
              <a href="#">VRゴーグル</a>
            </li>
            <li class="vertical-menu__nav__list--item">
              <a href="#">コスメ・スキンケア</a>
            </li>
            <li class="vertical-menu__nav__list--item">
              <a href="#">雑貨</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="search-form">
        <form action="" class="search-form__item">
          <input type="text" id="search-input" class="search-form__item--input" placeholder=" " />
          <label class="search-form__item--label" for="search-input">Search</label>
        </form>
      </div>
    </div>
  </header>
)

export default Header
