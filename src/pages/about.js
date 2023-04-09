import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/breadcrumb"
import PageHead from "../components/pageHead"

const AboutPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                { label: 'ZEXAGIFTについて' }
            ]}
            />
        <div className="mt-40 max-md:mt-24 max-md:px-[5%] max-md:py-0 max-w-[58rem] mx-auto">
            <PageHead>ZEXAGIFTについて</PageHead>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">販売業者</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>
                        株式会社ZEXAVERSE(ゼクサバース)<br />
                        上瀧 良平
                    </p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">所在地</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>〒102-0083 千代田区麹町3-5-2 ビュレックス205</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">連絡先</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p><a href="#" className="link">お問い合わせフォーム</a>よりお送りください。</p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">公開メールアドレス</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>info@zexagift.com</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">販売価格</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>商品詳細ページに記載されている価格になります。</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">商品代金以外の必要料金</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>なし</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">引き渡し時期</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>お客様の指定日時となります。</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">お支払方法</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>Shopify決済システムに準ずる。</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">返品期限</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>商品の返品・交換には初期不良の場合以外では応じられません。</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">返品送料</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8"><p>初期不良、発送商品間違いの場合、当店着払いにて対応いたします。</p></div>
            </div>
            <div className="max-md:p-0">
                <h4 className="text-[2rem] leading-[1.4] text-[#acacac] mt-16 max-md:text-[1.8rem] max-md:mt-12">資格</h4>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>
                        東京都公安委員会<br />
                        第301002315433号<br />
                        株式会社ゼクサバース
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage
