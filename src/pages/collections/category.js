import React, {useEffect} from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import CollectionBoxItem from "../../components/collections/collectionBoxItem";
import Button from "../../components/Button";
import { initAccordion } from "../../hook/accordion";

const CategoryPage = () => {
    useEffect(() => {
        initAccordion();
      }, []);
    return (
        <Layout>
            <Breadcrumb
                items={[
                    { label: 'Home', link: '/' },
                    {
                        label: 'VRゴーグル' }
                ]}
            />
            <div className="collection-view max-w-[120rem] mx-auto">
                    <StaticImage src="../../images/collections/vrgoggles/view_bg01.png" className="collection-view__image" alt="VRゴーグル" />
                    <h1 className="collection-view__title">VRゴーグル</h1>
                </div>
    
                <div className="category-wrap max-w-[120rem] mx-auto">
                    <div className="collection-head">
                        <div className="mobile-filter-btn">
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5L13 11V15L7 20V11L0 5V0H20V5ZM11 14.0632L9 15.7299V10.0801L4.23985 6H15.7602L11 10.0801V14.0632ZM2 4V2H18V4H2Z" fill="#000000"></path>
                            </svg>
                            <span>フィルターと並べ替え</span>
                        </div>
                        <div className="collection-head__num">
                            <p className="collection-head__num--val">5 製品</p>
                        </div>
                        <div className="collection-head__detail">
                            <div className="collection-head__state">
                                <div className="collection-head__state__tag">
                                    <a href="#">
                                        <span>在庫あり</span>
                                    </a>
                                </div>
                                <div className="collection-head__state__clear">
                                    <a href="#">
                                        <span>すべてクリア</span>
                                    </a>
                                </div>
                            </div>
                            <div className="collection-head__sort">
                                <label className="collection-head__sort--label">並び替え：</label>
                                <button className="collection-head__sort--btn">価格の安い順</button>
                                <ul className="collection-head__sort__list">
                                    <li className="collection-head__sort__list--item">
                                        <Button>オススメ</Button>
                                    </li>
                                    <li className="collection-head__sort__list--item">
                                        <Button>ベストセラー</Button>
                                    </li>
                                    <li className="collection-head__sort__list--item">
                                        <Button>アルファベット順, A-Z</Button>
                                    </li>
                                    <li className="collection-head__sort__list--item">
                                        <Button>アルファベット順, Z-A</Button>
                                    </li>
                                    <li className="collection-head__sort__list--item">
                                        <Button>価格の安い順</Button>
                                    </li>
                                    <li className="collection-head__sort__list--item">
                                        <Button>価格の高い順</Button>
                                    </li>
                                    <li className="collection-head__sort__list--item">
                                        <Button>古い商品順</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="collection-container">
                        <div className="collection-sidebar">
                            <dl className="collection-filter">
                                <dt className="collection-filter__summary side-summary [&.is-open]:after:rotate-180 [&.is-open]:after:pb-8 after:static after:block after:w-[1.2rem] after:h-[1.2rem] after:opacity-40 after:transition-opacity after:duration-[0.3s] after:ease-[ease] after:right-0 after:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer flex items-center justify-between py-12 border-t border-solid border-t-[rgba(172,172,172,0.3)] is-open">
                                    <h5 className="collection-filter__summary--head">出品状況</h5>
                                </dt>
                                <dd className="collection-filter__content side-content [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100 [&.is-open]:mb-12 transition-[0.3s] duration-[ease] overflow-hidden max-h-0 opacity-0 is-open">
                                    <div className="collection-filter__detail">
                                        <div className="collection-filter__detail--val">0 選択済み</div>
                                        <div className="font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0"><a href="#">リセット</a></div>
                                    </div>
                                    <div className="collection-filter__list">
                                        <div className="collection-filter__list--item">
                                            <label className="check-box">
                                                <input className="check-box__input" type="checkbox" />
                                                <div className="check-box__marker"></div>
                                                <div className="check-box__title">在庫あり</div>
                                                <div className="check-box__val">5</div>
                                            </label>
                                        </div>
                                        <div className="collection-filter__list--item">
                                            <label className="check-box disabled">
                                                <input className="check-box__input" type="checkbox" />
                                                <div className="check-box__marker"></div>
                                                <div className="check-box__title">在庫なし</div>
                                                <div className="check-box__val">0</div>
                                            </label>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl className="collection-filter">
                                <dt className="collection-filter__summary side-summary [&.is-open]:after:rotate-180 [&.is-open]:after:pb-8 after:static after:block after:w-[1.2rem] after:h-[1.2rem] after:opacity-40 after:transition-opacity after:duration-[0.3s] after:ease-[ease] after:right-0 after:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer flex items-center justify-between py-12 border-t border-solid border-t-[rgba(172,172,172,0.3)] is-open">
                                    <h5 className="side-summary--head text-[1.6rem] font-semibold leading-[1.4]">価格</h5>
                                </dt>
                                <dd className="collection-filter__content side-content [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100 [&.is-open]:mb-12 transition-[0.3s] duration-[ease] overflow-hidden max-h-0 opacity-0 is-open">
                                    <div className="collection-filter__detail">
                                        <div className="collection-filter__detail--val">最高価格は ¥1,980</div>
                                        <div className="font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0"><a href="#">リセット</a></div>
                                    </div>
                                    <div className="collection-filter__price">
                                        <div className="input-box">
                                            <input type="text" id="price-1" className="input-box__item" placeholder=" " />
                                            <label className="input-box__label" for="price-1">¥ から</label>
                                        </div>
                                        <div className="input-box">
                                            <input type="text" id="price-2" className="input-box__item" placeholder=" " />
                                            <label className="input-box__label" for="price-2">¥ に</label>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className="collection-content">
                            <div className="collection-box">
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" loading />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            <CollectionBoxItem title="オリジナルVRゴーグル" meta="ZEXAGIFT" price="¥1,980 JPY" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mobile-filter">
                <div class="mobile-filter__content">
                    <div class="mobile-filter__head">
                        <h3 class="mobile-filter__head--title">フィルターと並べ替え</h3>
                        <div class="mobile-filter-close">
                            <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="mobile-filter__nav">
                        <div class="mobile-filter__nav--item">
                            <span class="filter-open filter-open-1">
                                出品状況
                                <svg class="theme-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79289 6.20711L5 2.41421L6.41421 1L11.6213 6.20711L6.41421 11.4142L5 10L8.79289 6.20711Z" fill="#acacac"></path>
                                </svg>
                            </span>
                            <div class="filter-detail">
                                <h4 class="filter-detail__title filter-close-1">
                                    <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97392 8.94868L9.39195 5.48679L7.92399 4L2 10L7.92399 16L9.39195 14.5132L5.97392 11.0513H18V8.94868H5.97392Z" fill="#acacac"></path>
                                    </svg>
                                    出品状況
                                </h4>
                                <div class="filter-detail__item">
                                    <label class="check-box">
                                        <input class="check-box__input" type="checkbox" />
                                        <div class="check-box__marker"></div>
                                        <div class="check-box__title">在庫あり</div>
                                        <div class="check-box__val">5</div>
                                    </label>
                                </div>
                                <div class="filter-detail__item">
                                    <label class="check-box disabled">
                                        <input class="check-box__input" type="checkbox" />
                                        <div class="check-box__marker"></div>
                                        <div class="check-box__title">在庫なし</div>
                                        <div class="check-box__val">0</div>
                                    </label>
                                </div>
                                <div class="mobile-filter__footer">
                                    <a class="font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0">クリア</a>
                                    <a class="entry-btn">申し込み</a>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-filter__nav--item">
                            <span class="filter-open filter-open-2">
                                価格
                                <svg class="theme-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79289 6.20711L5 2.41421L6.41421 1L11.6213 6.20711L6.41421 11.4142L5 10L8.79289 6.20711Z" fill="#acacac"></path>
                                </svg>
                            </span>
                            <div class="filter-detail">
                                <h4 class="filter-detail__title filter-close-2">
                                    <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97392 8.94868L9.39195 5.48679L7.92399 4L2 10L7.92399 16L9.39195 14.5132L5.97392 11.0513H18V8.94868H5.97392Z" fill="#acacac"></path>
                                    </svg>
                                    価格
                                </h4>
                                <div class="filter-detail__subtitle">
                                    <div class="filter-detail__subtitle--val">最高価格は ¥1,980</div>
                                </div>
                                <div class="filter-detail__price">
                                    <div class="input-box">
                                        <input type="text" id="price-1" class="input-box__item" placeholder=" " />
                                        <label class="input-box__label" for="price-1">¥ から</label>
                                    </div>
                                    <div class="input-box">
                                        <input type="text" id="price-2" class="input-box__item" placeholder=" " />
                                        <label class="input-box__label" for="price-2">¥ に</label>
                                    </div>
                                </div>
                                <div class="mobile-filter__footer">
                                    <a class="text-[1.6rem] font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0 ">クリア</a>
                                    <a class="entry-btn">申し込み</a>
                                </div>
                            </div>
                        </div>
                        <div class="mobile-filter__select">
                            <select name="sort_by" class="mobile-filter__select--input" id="sort-by-mobile">
                                <option value="manual">オススメ</option>
                                <option value="best-selling" selected="selected">ベストセラー</option>
                                <option value="title-ascending">アルファベット順, A-Z</option>
                                <option value="title-descending">アルファベット順, Z-A</option>
                                <option value="price-ascending">価格の安い順</option>
                                <option value="price-descending">価格の高い順</option>
                                <option value="created-ascending">古い商品順</option>
                                <option value="created-descending">新着順</option>
                            </select>
                            <label class="mobile-filter__select--label" for="sort-by-mobile">並び替え：</label>
                        </div>
                        <div class="mobile-filter__footer">
                            <a class="text-[1.6rem] font-semibold relative inline-block content-[''] before:absolute before:w-full before:h-px before:transition-transform before:duration-[0.3s] before:ease-[ease] before:origin-[left_center] before:scale-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac] hover:before:scale-x-0">すべてクリア</a>
                            <a class="entry-btn">申し込み</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Category" />

export default CategoryPage
