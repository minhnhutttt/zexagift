import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const DeliveryPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: '送料・配送方法について' }
            ]}
        />
        <div className="page-wrap max-w-[58rem] mx-auto">
            <h1 className="page-head">送料・配送方法について</h1>
            <div className="page-row-2">
                <div className="page-row-2__body">
                    <p>この度は、数あるネットショップの中から当店を選んでいただきありがとうございます。</p>
                    <p>こちらは送料に関するご案内でございます。</p>
                </div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">■ 送料について</h4>
                <div className="page-row-2__body">
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
