import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const LegalNoticePage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: '特定商取引法に基づく表記' }
            ]}
        />
        <div className="page-wrap inner--sm">
            <h1 className="page-head">特定商取引法に基づく表記</h1>
            <div className="page-row-2">
                <h4 className="page-row-2__head">販売業者</h4>
                <div className="page-row-2__body">
                    <p>
                        株式会社ZEXAVERSE(ゼクサバース)<br />
                        上瀧 良平
                    </p>
                </div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">所在地</h4>
                <div className="page-row-2__body"><p>〒102-0083 千代田区麹町3-5-2 ビュレックス205</p></div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">連絡先</h4>
                <div className="page-row-2__body">
                    <p><a href="#" className="link">お問い合わせフォーム</a>よりお送りください。</p>
                </div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">公開メールアドレス</h4>
                <div className="page-row-2__body"><p>info@zexagift.com</p></div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">資格</h4>
                <div className="page-row-2__body">
                    <p>
                        東京都公安委員会<br />
                        第301002315433号<br />
                        株式会社ゼクサバース
                    </p>
                </div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">販売価格</h4>
                <div className="page-row-2__body"><p>商品詳細ページに記載されている価格になります。</p></div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">商品代金以外の必要料金</h4>
                <div className="page-row-2__body"><p>なし</p></div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">引き渡し時期</h4>
                <div className="page-row-2__body"><p>お客様の指定日時となります。</p></div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">お支払方法</h4>
                <div className="page-row-2__body"><p>Shopify決済システムに準ずる。</p></div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">返品期限</h4>
                <div className="page-row-2__body"><p>商品の返品・交換には初期不良の場合以外では応じられません。</p></div>
            </div>
            <div className="page-row-2">
                <h4 className="page-row-2__head">返品送料</h4>
                <div className="page-row-2__body"><p>初期不良、発送商品間違いの場合、当店着払いにて対応いたします。</p></div>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Legal Notice" />

export default LegalNoticePage
