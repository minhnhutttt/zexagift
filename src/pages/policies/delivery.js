import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import PageHead from "../../components/pageHead"

const DeliveryPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: '送料・配送方法について' }
            ]}
        />
        <div className="mt-40 max-md:mt-24 max-md:px-[5%] max-md:py-0 max-w-[58rem] mx-auto">
            <PageHead>送料・配送方法について</PageHead>
            <div className="max-md:p-0">
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>この度は、数あるネットショップの中から当店を選んでいただきありがとうございます。</p>
                    <p>こちらは送料に関するご案内でございます。</p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">■ 送料について</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>商品・送料につきましては、税率の10％が適用されます。</p>
                    <p>1回のご配送880円（税込）とさせていただきております。但し、北海道・沖縄・離島は別途料金を頂戴しております。</p>
                    <ul>
                        <li>北海道1,360円（税込）</li>
                        <li>沖縄離島1,650 （税込）</li>
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Delivery" />

export default DeliveryPage
