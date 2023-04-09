import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import PageHead from "../../components/pageHead"

const PrivacyPolicyPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: 'プライバシーポリシー'
                }
            ]}
        />
        <div className="mt-40 max-md:mt-24 max-md:px-[5%] max-md:py-0 max-w-[58rem] mx-auto">
            <PageHead>プライバシーポリシー</PageHead>
            <div className="max-md:p-0">
                <h2 className="text-5xl leading-[1.4] text-[#acacac] mt-32 mb-14 max-md:text-[2.2rem] max-md:mt-20 max-md:mb-8">1.事業者の名称</h2>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>株式会社ZEXAVERSE(ゼクサバース)</p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h2 className="text-5xl leading-[1.4] text-[#acacac] mt-32 mb-14 max-md:text-[2.2rem] max-md:mt-20 max-md:mb-8">2.個人情報の利用目的</h2>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>メタバース関連サービスの開発および構築支援のため。</p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h2 className="text-5xl leading-[1.4] text-[#acacac] mt-32 mb-14 max-md:text-[2.2rem] max-md:mt-20 max-md:mb-8">3.個人情報の第三者提供</h2>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>当社は、次に掲げる場合を除き、お客様の個人情報を第三者に提供することはございません。</p>
                    <ol>
                        <li>ご本人様の同意がある場合</li>
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体又は財産の保護のために必要がある場合であって、ご本人様の同意を得ることが困難な場合</li>
                        <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人様の同意を得ることが困難な場合</li>
                        <li>国の機関もしくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人様の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合</li>
                        <li>業務を円滑に遂行するため、利用目的の達成に必要な範囲内で個人情報の取扱いの全部又は一部を委託する場合</li>
                    </ol>
                </div>
            </div>
            <div className="max-md:p-0">
                <h2 className="text-5xl leading-[1.4] text-[#acacac] mt-32 mb-14 max-md:text-[2.2rem] max-md:mt-20 max-md:mb-8">4. 委託先での個人情報の取り扱い</h2>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>
                        当社は事業運営上、お客様により良いサービスを提供するために業務の一部を外部に委託しています。<br />
                        業務委託先に対しては個人情報を適切に取り扱っていると認められる委託先を選定し、契約等において個人情報の適正管理・機密保持などによりお客様の個人情報の漏洩防止に必要な事項を取決め、適切な管理を心がけています。
                    </p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h2 className="text-5xl leading-[1.4] text-[#acacac] mt-32 mb-14 max-md:text-[2.2rem] max-md:mt-20 max-md:mb-8">5. 個人情報の開示請求</h2>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>お客様は、当社に対してご自身の個人情報の開示等（利用目的の通知、開示、内容の訂正・追加・削除、利用の停止または消去、第三者への提供の停止）に関して、当社「個人情報に関するお問合わせ窓口」に申し出ることができます。その際、当社はお客様ご本人を確認させていただいたうえで、合理的な期間内に対応いたします。</p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h2 className="text-5xl leading-[1.4] text-[#acacac] mt-32 mb-14 max-md:text-[2.2rem] max-md:mt-20 max-md:mb-8">6. クッキーの使用について</h2>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>クッキー（Cookies）は、お客さまが当社のサイトに再度訪問された際、より便利に当サイトを閲覧していただくためのものであり、お客さまのプライバシーを侵害するものではなく、またお客さまのコンピューターへ悪影響を及ぼすことはありません。</p>
                    <p>また当社のサイトでは個人情報を入力していただく部分にはすべてSSL（Secure Sockets Layer）のデータ暗号化システムを利用しております。さらに、サイト内における情報の保護にもファイアウォールを設置するなどの方策を採っております。ただし、インターネット通信の性格上、セキュリティを完全に保証するものではありません。あらかじめご了承ください。</p>
                </div>
            </div>
            <div className="max-md:p-0">
                <h2 className="text-5xl leading-[1.4] text-[#acacac] mt-32 mb-14 max-md:text-[2.2rem] max-md:mt-20 max-md:mb-8">7. 個人情報に関する問い合わせ先</h2>
                <div className="text-[1.6rem] leading-[1.8] text-[#acacac] mt-2 max-md:text-2xl [&>p]:mt-2 [&>ul]:ml-12 [&>ul]:my-4 [&>ol]:ml-12 [&>ol]:my-4 [&>ul]:max-md:ml-8 [&>ol]:max-md:ml-8">
                    <p>お客様の個人情報に関するお問合せにつきましては、下記窓口で受付けております。</p>
                    <p>
                        〒102-0083 千代田区麹町3-5-2 ビュレックス205<br />
                        メールアドレス：info＠zexaverse.co.jp
                    </p>
                    <p>更新日：2022年3月14日</p>
                </div>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage
