import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const RefundPolicyPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: '返金ポリシー'
                }
            ]}
        />
        <div className="page-wrap inner--sm">
            <h1 className="page-head">返金ポリシー</h1>
            <div className="page-row-2">
                <h4 className="page-row-2__head">【キャンセル・返品・交換について】</h4>
                <div className="page-row-2__body">
                    <p>（１）商品到着日より20日以内であれば返品が可能です。詳細はお問い合わせくださいませ。</p>
                    <p>（２）下記の商品についてはキャンセル、返品、交換をお受けすることができませんので、ご注意ください。</p>
                    <ul>
                        <li>ご使用になられた商品</li>
                        <li>商品到着後21日以上経過した商品</li>
                        <li>お客様のもとで、キズや汚れが生じた商品</li>
                        <li>パッケージ（袋・ケース）のない商品</li>
                        <li>パッケージ（袋・ケース）のない商品</li>
                        <li>その他、商品紹介ページに返品できない旨が明記されている商品</li>
                    </ul>
                    <p>（３）返品等にかかる送料は弊社が負担致します。</p>
                    <p>（４）返金は、返送された商品が到着後3営業日以内に支払い方法に応じて行います。</p>
                </div>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Refund Policy" />

export default RefundPolicyPage
