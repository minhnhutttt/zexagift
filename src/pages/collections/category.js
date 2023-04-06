import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const CategoryPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: 'VRゴーグル' }
            ]}
        />
        <div className="collection-view inner">
                <StaticImage src="../../images/collections/vrgoggles/view_bg01.png" className="collection-view__image" alt="VRゴーグル" />
                <h1 className="collection-view__title">VRゴーグル</h1>
            </div>

            <div className="category-wrap inner">
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
                                    <span className="line-btn">オススメ</span>
                                </li>
                                <li className="collection-head__sort__list--item">
                                    <span className="line-btn">ベストセラー</span>
                                </li>
                                <li className="collection-head__sort__list--item">
                                    <span className="line-btn">アルファベット順, A-Z</span>
                                </li>
                                <li className="collection-head__sort__list--item">
                                    <span className="line-btn">アルファベット順, Z-A</span>
                                </li>
                                <li className="collection-head__sort__list--item">
                                    <span className="line-btn active">価格の安い順</span>
                                </li>
                                <li className="collection-head__sort__list--item">
                                    <span className="line-btn">価格の高い順</span>
                                </li>
                                <li className="collection-head__sort__list--item">
                                    <span className="line-btn">古い商品順</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="collection-container">
                    <div className="collection-sidebar">
                        <dl className="collection-filter">
                            <dt className="collection-filter__summary side-summary is-open">
                                <h5 className="collection-filter__summary--head">出品状況</h5>
                            </dt>
                            <dd className="collection-filter__content side-content is-open">
                                <div className="collection-filter__detail">
                                    <div className="collection-filter__detail--val">0 選択済み</div>
                                    <div className="clear-btn"><a href="#">リセット</a></div>
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
                            <dt className="collection-filter__summary side-summary is-open">
                                <h5 className="side-summary--head">価格</h5>
                            </dt>
                            <dd className="collection-filter__content side-content is-open">
                                <div className="collection-filter__detail">
                                    <div className="collection-filter__detail--val">最高価格は ¥1,980</div>
                                    <div className="clear-btn"><a href="#">リセット</a></div>
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
                            <div className="collection-box__item">
                                <a href="#">
                                    <figure className="collection-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    </figure>
                                    <p className="collection-box__item--meta">ZEXAGIFT</p>
                                    <p className="collection-box__item--title">オリジナルVRゴーグル</p>
                                    <p className="collection-box__item--price">¥1,980 JPY</p>
                                </a>
                                <button type="submit" className="collection-box__item--btn" aria-haspopup="dialog">
                                    <span>カートに入れる</span>
                                    <div className="loading-overlay hidden">
                                        <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="loading-overlay__spinner--path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="collection-box__item">
                                <a href="#">
                                    <figure className="collection-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                        <StaticImage src="../../images/sample/sample02.jpeg" alt="" />
                                    </figure>
                                    <p className="collection-box__item--meta">ZEXAGIFT</p>
                                    <p className="collection-box__item--title">オリジナルVRゴーグル</p>
                                    <p className="collection-box__item--price">¥1,980 JPY</p>
                                </a>
                                <button type="submit" className="collection-box__item--btn loading">
                                    <span>カートに入れる</span>
                                    <div className="loading-overlay">
                                        <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="loading-overlay__spinner--path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="collection-box__item">
                                <a href="#">
                                    <figure className="collection-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                        <StaticImage src="../../images/sample/sample02.jpeg" alt="" />
                                    </figure>
                                    <p className="collection-box__item--meta">ZEXAGIFT</p>
                                    <p className="collection-box__item--title">オリジナルVRゴーグル</p>
                                    <p className="collection-box__item--price">¥1,980 JPY</p>
                                </a>
                                <button type="submit" className="collection-box__item--btn" aria-haspopup="dialog">
                                    <span>カートに入れる</span>
                                    <div className="loading-overlay hidden">
                                        <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="loading-overlay__spinner--path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="collection-box__item">
                                <a href="#">
                                    <figure className="collection-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    </figure>
                                    <p className="collection-box__item--meta">ZEXAGIFT</p>
                                    <p className="collection-box__item--title">オリジナルVRゴーグル</p>
                                    <p className="collection-box__item--price">¥1,980 JPY</p>
                                </a>
                                <button type="submit" className="collection-box__item--btn" aria-haspopup="dialog">
                                    <span>カートに入れる</span>
                                    <div className="loading-overlay hidden">
                                        <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="loading-overlay__spinner--path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="collection-box__item">
                                <a href="#">
                                    <figure className="collection-box__item--thumb">
                                        <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    </figure>
                                    <p className="collection-box__item--meta">ZEXAGIFT</p>
                                    <p className="collection-box__item--title">オリジナルVRゴーグル</p>
                                    <p className="collection-box__item--price">¥1,980 JPY</p>
                                </a>
                                <button type="submit" className="collection-box__item--btn" aria-haspopup="dialog">
                                    <span>カートに入れる</span>
                                    <div className="loading-overlay hidden">
                                        <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="loading-overlay__spinner--path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
)

export const Head = () => <Seo title="Category" />

export default CategoryPage
