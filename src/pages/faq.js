import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/breadcrumb"
import FaqItem from "../components/faqItem"

const FaqPage = () => (
  <Layout>
    <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                { label: 'ZEXAGIFTについて' }
            ]}
            />
            <div class="page-wrap max-w-[58rem] mx-auto">
                <h1 class="page-head">ZEXAGIFTについて</h1>
                <FaqItem
                    q="メガネをしていてもVRゴーグルをつけられますか？"
                    a="メガネをしたままでもVRゴーグルを装着し動画をお楽しみいただけます。"
                />
                <FaqItem
                    q="複数人で同じ動画を見てもちゃんと見えますか？"
                    a="複数人で同時再生可能でございます。"
                />
                <FaqItem
                    q="ゴーグルの大きさは制限ありますか？"
                    a="ゴムのベルト式になっているので調整して使用いただけます。"
                />
                <FaqItem
                    q="どんなコンテンツが見られますか？"
                    a="実際に弊社スタッフが撮影をした映像を用意しており、エジプトのピラミッドやサイパンの戦争遺跡の映像など、多くの動画をお楽しみいただけます。"
                />
                <FaqItem
                    q="動画コンテンツは有料ですか？"
                    a="動画コンテンツはすべて無料です。"
                />
                <FaqItem
                    q="VR動画を視聴するには、何が必要ですか？"
                    a="弊社専用のVRゴーグル・スマートフォン・ネット環境をご用意ください。"
                />
                <FaqItem
                    q="VRモードとは、何ですか？（※スマートフォン向け機能）"
                    a="360度で映像をお楽しみいただくことができるVR視聴に対応している動画です。動画を開くと、画面上にゴーグルのアイコンが表示されるので、そのアイコンをタップしていただくとVRモードになります。"
                />
                <FaqItem
                    q="ゴーグルの貸し出し(レンタル)はありますか？"
                    a="ゴーグルの貸し出しは行っておりません。"
                />
                <FaqItem
                    q="「メタダイバー」とは何ですか？"
                    a="メタダイバーは、ワールドスキャンプロジェクトがドローンで撮影した世界遺産や歴史的建造物などを3D立体映像＝VRで見て学ぶことができるシステムです。"
                />
            </div>
  </Layout>
)

export const Head = () => <Seo title="FAQ" />

export default FaqPage
