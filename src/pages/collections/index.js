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
        <div className="mt-40 max-md:mt-24 max-md:px-[5%] max-md:py-0 max-w-[120rem] mx-auto">
            <div className="flex items-center justify-between mb-24 max-md:mb-20">
                <h1 className="text-5xl text-[#acacac] max-md:text-[2.6rem]">商品カテゴリ</h1>
                    <div>
                    <a href="#" className="font-semibold text-[#494676] relative before:content-[''] before:absolute before:bottom-[-0.3rem] before:h-px before:origin-[left_center] before:transition-[0.3s] before:duration-[ease] before:inset-x-0 hover:before:scale-x-0 hover:before:scale-y-1" aria-disabled="true"><span>Shop all</span></a>
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
