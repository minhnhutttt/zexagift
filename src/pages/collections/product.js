import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from "gatsby"
import Breadcrumb from "../../components/breadcrumb/breadcrumb"
import { initAccordion } from "../../hook/accordion";

const ProductPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: {
        sourceInstanceName: { eq: "images" },
        name: { in: ["sample01", "sample02"] },
        extension: { eq: "jpeg" }
      }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
    useEffect(() => {
        initAccordion();
    }, []);
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleImageClick = (index) => {
        setCurrentImageIndex(index)
    }

    const imageUrls = data.allFile.edges.map(({ node }) => node.publicURL)
    return (
        <Layout>
            <Breadcrumb
                items={[
                    { label: 'Home', link: '/' },
                    {
                        label: 'オリジナルVRゴーグル'
                    }
                ]}
            />
            <div className="flex justify-between relative items-start max-md:block max-md:px-[5%] max-md:py-0 max-w-[120rem] mx-auto">
                <div className="flex flex-row-reverse justify-between w-[53%] sticky top-8 max-md:block max-md:w-full max-md:static max-md:top-0">
                    <div className="flex-[1] relative cursor-pointer ml-14 max-md:pointer-events-none max-md:ml-0 max-md:mb-8">
                        <span className="absolute opacity-40 right-8 top-8 max-md:hidden">
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6V8H6V10H8V12H10V10H12V8H10V6H8Z" fill="#acacac"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13373 18.2675C11.2903 18.2675 13.2723 17.5201 14.8349 16.2701L18.5648 20L20 18.5648L16.2701 14.8349C17.52 13.2723 18.2675 11.2903 18.2675 9.13374C18.2675 4.08931 14.1781 0 9.13373 0C4.08931 0 0 4.08931 0 9.13374C0 14.1782 4.08931 18.2675 9.13373 18.2675ZM9.13373 16.2378C13.0572 16.2378 16.2377 13.0572 16.2377 9.13374C16.2377 5.2103 13.0572 2.02972 9.13373 2.02972C5.21029 2.02972 2.02972 5.2103 2.02972 9.13374C2.02972 13.0572 5.21029 16.2378 9.13373 16.2378Z" fill="#acacac"></path>
                            </svg>
                        </span>
                        <div className="swiper slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img
                                        src={imageUrls[currentImageIndex]}
                                        alt=""
                                        className="w-full aspect-[1/1] rounded-[0.8rem] product-img modal-btn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-thumbnail">
                        <ul className="w-[6.4rem] block h-auto  max-md:flex max-md:w-auto">
                            {data.allFile.edges.map(({ node }, index) => (
                                <li key={index} className="mb-4  max-md:w-[calc((100%_-_4rem)_/_5)] max-md:mr-4 max-md:mb-4">
                                    <img
                                        src={node.publicURL}
                                        className="product-slider__thumb--img w-[6.4rem] aspect-[1/1] block rounded-[0.8rem] max-md:w-full max-md:aspect-[1/1] max-md:block max-md:pointer-events-none max-md:rounded-[0.8rem]"
                                        onClick={() => handleImageClick(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-[47%] text-[#acacac] pl-28 max-md:w-auto max-md:mt-24 max-md:pl-0">
                    <h1 className="text-5xl leading-[1.4] max-md:text-[2.6rem]">オリジナルVRゴーグル</h1>
                    <p className="text-[2rem] font-semibold mt-8 max-md:mt-8">¥1,980 JPY</p>
                    <button type="submit" className="appearance-none text-white text-[1.6rem] font-semibold relative cursor-pointer w-full mt-16 px-10 py-[1.3rem] border-[none] before:content-[''] before:absolute before:bg-[#494676] before:transition-transform before:duration-[0.3s] before:ease-[ease] before:rounded-[0.8rem] before:inset-0" aria-haspopup="dialog">
                        <span className="relative">カートに入れる</span>
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

            <div className="mt-40 max-md:px-[5%] max-md:py-0 max-w-[120rem] mx-auto">
                <dl className="product-exp__box">
                    <dt className="product-exp__summary [&.is-open]:after:rotate-180 after:content-[''] after:static after:block after:w-[1.2rem] after:h-[1.2rem] after:opacity-40 after:transition-opacity after:duration-[0.3s] after:ease-[ease] after:right-0 after:top-[0.8rem] before:hidden  flex items-center justify-between py-12 border-t border-solid border-t-[rgba(172,172,172,0.3)] hover:after:opacity-100 ac-summary hover:before:opacity-100 [&.is-open]:before:rotate-180 [&.is-open]:pb-8 before:content-[''] before:absolute before:w-[1.2rem] before:h-[1.2rem] before:opacity-40 before:transition-opacity before:duration-[0.3s] before:ease-[ease] before:right-0 before:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer pb-8">
                        <h4 className="text-[2rem] font-semibold leading-[1.4] flex items-center">
                            <span className="flex w-[1.2rem] opacity-40 mr-6">
                                <svg className="theme-icon w-full" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 13H26V16H8V13Z" fill="#acacac"></path>
                                    <path d="M26 19H15V22H26V19Z" fill="#acacac"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30C0 34.483 2.94988 38.2769 7.01444 39.5467C7.00486 39.6966 7 39.8477 7 40C7 43.866 10.134 47 14 47C17.866 47 21 43.866 21 40H29C29 43.866 32.134 47 36 47C39.866 47 43 43.866 43 40H48V28.9455L40.1071 8H34V1H0V30ZM42.3264 37H45V29.4919L44.8146 29H34V33.2899C34.6337 33.1013 35.305 33 36 33C38.7924 33 41.2029 34.6351 42.3264 37ZM31 35.101V4H3V30C3 33.1143 5.03372 35.7535 7.84552 36.6622C9.03109 34.4808 11.3426 33 14 33C16.7924 33 19.2029 34.6351 20.3264 37H29.6736C30.0091 36.2939 30.4592 35.6529 31 35.101ZM43.6841 26H34V11H38.0317L43.6841 26ZM14 44C16.2091 44 18 42.2091 18 40C18 37.7909 16.2091 36 14 36C11.7909 36 10 37.7909 10 40C10 42.2091 11.7909 44 14 44ZM40 40C40 42.2091 38.2091 44 36 44C33.7909 44 32 42.2091 32 40C32 37.7909 33.7909 36 36 36C38.2091 36 40 37.7909 40 40Z" fill="#acacac"></path>
                                </svg>
                            </span>
                            送料・配送方法について
                        </h4>
                    </dt>
                    <dd className="product-exp__content [&>p]:text-[1.6rem] [&>p]:leading-[1.8] ac-content transition-[0.3s] duration-[ease] overflow-hidden max-h-0 opacity-0 [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100 [&.is-open]:mb-8">
                        <p>商品・送料につきましては、税率の10％が適用されます。</p>
                        <p>1配送先につき 880円 (税込)頂戴しております。</p>
                        <p>但し、北海道・沖縄・離島は別途料金となっております。</p>
                        <ul className="ml-8 mr-0 my-8">
                            <li className="text-[1.6rem] leading-[1.8]">【北海道】1,360円 (税込)</li>
                            <li className="text-[1.6rem] leading-[1.8]">【沖縄離島】1,650円 (税込)</li>
                        </ul>
                        <p>となります。</p>
                        <p>発送は基本的に、注文完了後７日以内に行っております。 商品のサイズや、数量などにより配送方法は各地によって異なりますため、お届けの時間も配送会社によって異なる場合もございます。ご了承下さいませ。</p>
                    </dd>
                </dl>
                <dl className="product-exp__box">
                    <dt className="product-exp__summary [&.is-open]:after:rotate-180 after:content-[''] after:static after:block after:w-[1.2rem] after:h-[1.2rem] after:opacity-40 after:transition-opacity after:duration-[0.3s] after:ease-[ease] after:right-0 after:top-[0.8rem] before:hidden  flex items-center justify-between py-12 border-t border-solid border-t-[rgba(172,172,172,0.3)] hover:after:opacity-100 ac-summary hover:before:opacity-100 [&.is-open]:before:rotate-180 [&.is-open]:pb-8 before:content-[''] before:absolute before:w-[1.2rem] before:h-[1.2rem] before:opacity-40 before:transition-opacity before:duration-[0.3s] before:ease-[ease] before:right-0 before:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer pb-8">
                        <h4 className="text-[2rem] font-semibold leading-[1.4] flex items-center">
                            <span className="flex w-[1.2rem] opacity-40 mr-6">
                                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12px" height="10px">
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
                    <dd className="product-exp__content [&>p]:text-[1.6rem] [&>p]:leading-[1.8] ac-content transition-[0.3s] duration-[ease] overflow-hidden max-h-0 opacity-0 [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100 [&.is-open]:mb-8">
                        <p>色んな決済方法で便利！</p>
                        <p>お支払いは、クレジットカード決済・Apple Pay・Google Pay・Shop Pay・PayPalの中からご選択下さい。</p>
                    </dd>
                </dl>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Product" />

export default ProductPage
