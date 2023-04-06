import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const CollectionPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: 'コレクション' }
            ]}
        />
        <div className="page-wrap inner">
                <div className="category-head">
                    <h1 className="category-head__title">商品カテゴリ</h1>
                    <div className="category-head__btn">
                        <a href="#" className="category-head__btn--link" aria-disabled="true"><span>Shop all</span></a>
                    </div>
                </div>
                <div className="list-box list-box--col-6">
                    <div className="list-box__item">
                        <a href="/collections/category_noproduct">
                            <figure className="list-box__item--thumb">
                                <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                            </figure>
                            <p className="list-box__item--title">
                                <span>ギフトカード</span>
                            </p>
                        </a>
                    </div>
                    <div className="list-box__item">
                        <a href="/collections/category">
                            <figure className="list-box__item--thumb">
                            <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                            </figure>
                            <p className="list-box__item--title">
                                <span>VRゴーグル</span>
                            </p>
                        </a>
                    </div>
                    <div className="list-box__item">
                        <a href="/collections/category">
                            <figure className="list-box__item--thumb">
                            <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                            </figure>
                            <p className="list-box__item--title">
                                <span>コスメ・スキンケア</span>
                            </p>
                        </a>
                    </div>
                    <div className="list-box__item">
                        <a href="/collections/category">
                            <figure className="list-box__item--thumb">
                            <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                            </figure>
                            <p className="list-box__item--title">
                                <span>雑貨</span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
    </Layout>
)

export const Head = () => <Seo title="Collections" />

export default CollectionPage
