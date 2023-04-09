import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import PageHead from "../../components/pageHead"

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
        <div className="mt-40 max-md:mt-24 max-md:px-[5%] max-md:py-0 max-w-[58rem] mx-auto">
            <PageHead>返金ポリシー</PageHead>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">【キャンセル・返品・交換について】</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
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
