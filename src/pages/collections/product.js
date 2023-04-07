import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import Breadcrumb from "../../components/breadcrumb/breadcrumb"

const ProductPage = () => (
    <Layout>
        <Breadcrumb
            items={[
                { label: 'Home', link: '/' },
                {
                    label: 'オリジナルVRゴーグル' }
            ]}
        />
        <div className="product-wrap max-w-[120rem] mx-auto">
                <div className="product-slider">
                    <div className="product-slider__main">
                        <span className="product-slider__main--ico">
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6V8H6V10H8V12H10V10H12V8H10V6H8Z" fill="#acacac"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13373 18.2675C11.2903 18.2675 13.2723 17.5201 14.8349 16.2701L18.5648 20L20 18.5648L16.2701 14.8349C17.52 13.2723 18.2675 11.2903 18.2675 9.13374C18.2675 4.08931 14.1781 0 9.13373 0C4.08931 0 0 4.08931 0 9.13374C0 14.1782 4.08931 18.2675 9.13373 18.2675ZM9.13373 16.2378C13.0572 16.2378 16.2377 13.0572 16.2377 9.13374C16.2377 5.2103 13.0572 2.02972 9.13373 2.02972C5.21029 2.02972 2.02972 5.2103 2.02972 9.13374C2.02972 13.0572 5.21029 16.2378 9.13373 16.2378Z" fill="#acacac"></path>
                            </svg>
                        </span>
                        <div className="swiper slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <StaticImage src="../../images/sample/sample01.jpeg" className="product-slider__main--img product-img modal-btn" alt="" />
                                </div>
                                <div className="swiper-slide">
                                    <StaticImage src="../../images/sample/sample02.jpeg" className="product-slider__main--img product-img modal-btn" alt="" />
                                </div>
                                <div className="swiper-slide">
                                <StaticImage src="../../images/sample/sample02.jpeg" className="product-slider__main--img product-img modal-btn" alt="" />
                                </div>
                                <div className="swiper-slide">
                                <StaticImage src="../../images/sample/sample01.jpeg" className="product-slider__main--img product-img modal-btn" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper slider-thumbnail">
                        <ul className="product-slider__thumb swiper-wrapper">
                            <li className="product-slider__thumb--item swiper-slide"><StaticImage src="../../images/sample/sample01.jpeg" className="product-slider__thumb--im" alt="" /></li>
                            <li className="product-slider__thumb--item swiper-slide"><StaticImage src="../../images/sample/sample02.jpeg" className="product-slider__thumb--im" alt="" /></li>
                            <li className="product-slider__thumb--item swiper-slide"><StaticImage src="../../images/sample/sample01.jpeg" className="product-slider__thumb--im" alt="" /></li>
                            <li className="product-slider__thumb--item swiper-slide"><StaticImage src="../../images/sample/sample02.jpeg" className="product-slider__thumb--im" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="product-detail">
                    <h1 className="product-detail__title">オリジナルVRゴーグル</h1>
                    <p className="product-detail__price">¥1,980 JPY</p>
                    <button type="submit" className="product-detail__btn" aria-haspopup="dialog">
                        <span>カートに入れる</span>
                        <div className="loading-overlay hidden">
                            <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                <circle className="loading-overlay__spinner--path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                            </svg>
                        </div>
                    </button>
                    <div className="product-detail__description">
                        <h2>ワールドスキャンプロジェクト<br />（WSP）オリジナルVRゴーグル</h2>
                        <h3>
                            VRアプリ<a href="https://meta-tours.jp/meta-diver.php" title="Meta-Diver" target="_blank" className="link"><span>「Meta‐Diver」</span></a>を100％で楽しむならこれ！！
                        </h3>
                        <p>&nbsp;</p>
                        <p>
                            VR（仮想現実 - Virtual Reality）の世界ではVRゴーグルを装着することで目の前にある現実世界とは異なる世界を見る、自宅にいながら世界のさまざまな絶景、名所、日本の神社仏閣を訪れたかのような体験を味わえます。<br />
                            オリジナルゴーグルを使用してVR専用の動画を視聴することでリアルな体験をお楽しみ下さい！
                        </p>
                        <p>新感覚のVR（メタツアーズ）を体験するならこちらのゴーグルをどうぞ！</p>
                        <p>※VR動画はVRゴーグルがないと体験できません</p>
                        <p>重量：158ｇ</p>
                        <p>大きさ：156mm×101mm×88mm（横×奥行×高さ）</p>
                        <p>&nbsp;</p>
                        <p>VRゴーグルをご購入の際は新しい没入体験ができるアプリ<a href="https://meta-tours.jp/meta-diver.php" target="_blank" title="メタツアーズ_Meta-Diver" rel="noopener noreferrer" className="link">「Meta-Diver」</a>をお試しください！</p>
                    </div>
                </div>
            </div>

            <div className="product-exp max-w-[120rem] mx-auto">
                <dl className="product-exp__box">
                    <dt className="product-exp__summary ac-summary">
                        <h4 className="product-exp__summary--head">
                            <span>
                                <svg className="theme-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 13H26V16H8V13Z" fill="#acacac"></path>
                                    <path d="M26 19H15V22H26V19Z" fill="#acacac"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30C0 34.483 2.94988 38.2769 7.01444 39.5467C7.00486 39.6966 7 39.8477 7 40C7 43.866 10.134 47 14 47C17.866 47 21 43.866 21 40H29C29 43.866 32.134 47 36 47C39.866 47 43 43.866 43 40H48V28.9455L40.1071 8H34V1H0V30ZM42.3264 37H45V29.4919L44.8146 29H34V33.2899C34.6337 33.1013 35.305 33 36 33C38.7924 33 41.2029 34.6351 42.3264 37ZM31 35.101V4H3V30C3 33.1143 5.03372 35.7535 7.84552 36.6622C9.03109 34.4808 11.3426 33 14 33C16.7924 33 19.2029 34.6351 20.3264 37H29.6736C30.0091 36.2939 30.4592 35.6529 31 35.101ZM43.6841 26H34V11H38.0317L43.6841 26ZM14 44C16.2091 44 18 42.2091 18 40C18 37.7909 16.2091 36 14 36C11.7909 36 10 37.7909 10 40C10 42.2091 11.7909 44 14 44ZM40 40C40 42.2091 38.2091 44 36 44C33.7909 44 32 42.2091 32 40C32 37.7909 33.7909 36 36 36C38.2091 36 40 37.7909 40 40Z" fill="#acacac"></path>
                                </svg>
                            </span>
                            送料・配送方法について
                        </h4>
                    </dt>
                    <dd className="product-exp__content ac-content">
                        <p>商品・送料につきましては、税率の10％が適用されます。</p>
                        <p>1配送先につき 880円 (税込)頂戴しております。</p>
                        <p>但し、北海道・沖縄・離島は別途料金となっております。</p>
                        <ul>
                            <li>【北海道】1,360円 (税込)</li>
                            <li>【沖縄離島】1,650円 (税込)</li>
                        </ul>
                        <p>となります。</p>
                        <p>発送は基本的に、注文完了後７日以内に行っております。 商品のサイズや、数量などにより配送方法は各地によって異なりますため、お届けの時間も配送会社によって異なる場合もございます。ご了承下さいませ。</p>
                    </dd>
                </dl>
                <dl className="product-exp__box">
                    <dt className="product-exp__summary ac-summary">
                        <h4 className="product-exp__summary--head">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12px" height="10px">
                                    <image
                                        x="0px"
                                        y="0px"
                                        width="12px"
                                        height="10px"
                                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAQAAAB5nzR5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmCw0GJTKt2kYmAAACWUlEQVQ4y42UW2jOcRjHP///+74by6tlYUi9DgmjqDmVQ5RzcYNcCBcaSTEXLpAbpVzIhTu5cM4hJCaGNhNFMYeMLafYZphDc9r27t3HhVO295Xn5un3fH+f5/Dr6RcAGDCReeTRSpIUECFCK+VcCL6R2ZzsFbea6BCNu9iTbrN7Jmye1Q7ImHSutx2ZXqpx2j/awdHWmZtOMHO9nzcuubhzNKSNlf8G6UGXdPluqxuNZqxXrK5KJ9TbYpmVrjDeQQkd70m1wRWduSgxHpNLActZY5IbfKSRKD0ZSIJCdvOUHMJ0Mz5jONls5zlxCqljE0UMZwNzqKSSt7wmnxSYZcJef8DAFl5yl9lUcpz3ZJNHF1K84RXdmEoho7jDRQoIqSVOXyrYHnwCfGiT+23ytBfVc9Z7zXIbbfaAWuo+b7nf/N9zL/SGgyGknThTOEY5dVTTRh/600oeL6mlmGsMpTRYGjT8bLA9OM4SDpoT+JX7tDOKWmqooopmmmkhZAATmMVZhjAhsMN7L6Mf3lRPu9fr3le3qC8sVT+52aTnTLMexqyIMojPRJjOER7Qm3zOk6KRQzyhmtXM515nMEiaivKFJnLJZxiTGEQJn/mA5DCHGYznFJG0CxWG7CLBYLZSQ4wevGMBE4mxkBFUcYR6CtO0mkMkMIsTtDGT55zhHq1kEyXJOyTBIrKIMyZIdgDX/nARi3zkZcvUw+orb6lf3amWu8PdBn9h46ww689xrFss8ahfbPCqL7zsJmeZDa635NcvYFfXWWYvCPgPcyTFDOQbMUKOsSdog+86wkL60r+ezQAAAABJRU5ErkJggg=="
                                    ></image>
                                </svg>
                            </span>
                            お支払い方法について
                        </h4>
                    </dt>
                    <dd className="product-exp__content ac-content">
                        <p>色んな決済方法で便利！</p>
                        <p>お支払いは、クレジットカード決済・Apple Pay・Google Pay・Shop Pay・PayPalの中からご選択下さい。</p>
                    </dd>
                </dl>
            </div>
        <div id="modal01" class="modal">
            <div class="max-w-[120rem] w-4/5 relative max-h-[80%] overflow-x-hidden md:overflow-scroll mx-auto my-24 p-16 rounded-[0.8rem] bg-[#080d1b]">
                <div class="text-5xl cursor-pointer absolute right-8 top-4">
                    <svg class="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                    </svg>
                </div>
                <div class="modal-content__body">
                    <span class="block overflow-hidden rounded-[0.8rem] w-4/5 max-w-[70rem] mx-auto my-12 max-md:block max-md:overflow-hidden max-md:mx-0 max-md:my-8 max-md:rounded-[0.8rem]"><img src="/img/sample/sample01.jpeg" /></span>
                    <span class="block overflow-hidden rounded-[0.8rem] w-4/5 max-w-[70rem] mx-auto my-12 max-md:block max-md:overflow-hidden max-md:mx-0 max-md:my-8 max-md:rounded-[0.8rem]"><img src="/img/sample/sample01.jpeg" /></span>
                    <span class="block overflow-hidden rounded-[0.8rem] w-4/5 max-w-[70rem] mx-auto my-12 max-md:block max-md:overflow-hidden max-md:mx-0 max-md:my-8 max-md:rounded-[0.8rem]"><img src="/img/sample/sample01.jpeg" /></span>
                    <span class="block overflow-hidden rounded-[0.8rem] w-4/5 max-w-[70rem] mx-auto my-12 max-md:block max-md:overflow-hidden max-md:mx-0 max-md:my-8 max-md:rounded-[0.8rem]"><img src="/img/sample/sample01.jpeg" /></span>
                </div>
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Product" />

export default ProductPage
