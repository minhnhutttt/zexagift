import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Breadcrumb from "../components/breadcrumb/breadcrumb"

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

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.メガネをしていてもVRゴーグルをつけられますか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.メガネをしたままでもVRゴーグルを装着し動画をお楽しみいただけます。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.複数人で同じ動画を見てもちゃんと見えますか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.複数人で同時再生可能でございます。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.ゴーグルの大きさは制限ありますか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.ゴムのベルト式になっているので調整して使用いただけます。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.どんなコンテンツが見られますか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.実際に弊社スタッフが撮影をした映像を用意しており、エジプトのピラミッドやサイパンの戦争遺跡の映像など、多くの動画をお楽しみいただけます。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.動画コンテンツは有料ですか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.動画コンテンツはすべて無料です。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.VR動画を視聴するには、何が必要ですか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.弊社専用のVRゴーグル・スマートフォン・ネット環境をご用意ください。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.VRモードとは、何ですか？（※スマートフォン向け機能）</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.360度で映像をお楽しみいただくことができるVR視聴に対応している動画です。動画を開くと、画面上にゴーグルのアイコンが表示されるので、そのアイコンをタップしていただくとVRモードになります。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.ゴーグルの貸し出し(レンタル)はありますか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.ゴーグルの貸し出しは行っておりません。</p>
                    </dd>
                </dl>

                <dl class="faq">
                    <dt class="faq__summary ac-summary">
                        <h4 class="faq__summary--head">Q.「メタダイバー」とは何ですか？</h4>
                    </dt>
                    <dd class="faq__content ac-content">
                        <p class="faq__content--body">A.メタダイバーは、ワールドスキャンプロジェクトがドローンで撮影した世界遺産や歴史的建造物などを3D立体映像＝VRで見て学ぶことができるシステムです。</p>
                    </dd>
                </dl>
            </div>
  </Layout>
)

export const Head = () => <Seo title="FAQ" />

export default FaqPage
