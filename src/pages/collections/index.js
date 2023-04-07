import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import ListBoxItem from "../../components/collections/listBoxItem";

const CollectionPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: 'コレクション' }
            ]}
        />
        <div className="page-wrap max-w-[120rem] mx-auto">
                <div className="category-head">
                    <h1 className="category-head__title">商品カテゴリ</h1>
                    <div className="category-head__btn">
                        <a href="#" className="category-head__btn--link" aria-disabled="true"><span>Shop all</span></a>
                    </div>
                </div>
            <div className="flex flex-wrap list-box--col-6 max-md:justify-between md:[&>*:nth-child(-n+6)]:mt-0 max-md:[&>*:nth-child(-n+2)]:mt-0 [&>*:nth-child(6n)]:mr-0">
                <ListBoxItem title="ギフトカード" link="/collections/category" />
                <ListBoxItem title="VRゴーグル" link="/collections/category" />
                <ListBoxItem title="コスメ・スキンケア" link="/collections/category" />
                <ListBoxItem title="雑貨" link="/collections/category" />
                </div>
            </div>
    </Layout>
)

export const Head = () => <Seo title="Collections" />

export default CollectionPage
