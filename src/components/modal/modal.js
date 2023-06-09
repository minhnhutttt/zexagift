import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

const Modal = ({ handleClose, show }) => {
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleImageClick = (index) => {
        setCurrentImageIndex(index)
    }

    const imageUrls = data.allFile.edges.map(({ node }) => node.publicURL)

    return (
        <div className={`hidden fixed z-[100] h-full w-full overflow-auto items-center bg-[rgba(172,172,172,0.3)] left-0 top-0 ${show ? '!flex' : ''}`}>
            <div className="fixed inset-0" onClick={handleClose}></div>
            <div className="max-w-[120rem] w-4/5 relative max-h-[80%] overflow-x-hidden md:overflow-scroll mx-auto my-24 p-16 rounded-[0.8rem] bg-[#080d1b]">
                <div className="text-5xl cursor-pointer absolute right-8 top-4" onClick={handleClose}>
                    <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                    </svg>
                </div>
                <div className="modal-container">
                    <div className="flex justify-between relative items-start max-md:block max-md:px-[5%] max-md:py-0 max-w-[120rem] mx-auto">
                        <div className="flex flex-row-reverse justify-between w-[53%] sticky top-8 max-md:block max-md:w-full max-md:static max-md:top-0 mt-0">
                            <div className="flex-[1] relative cursor-pointer ml-14 max-md:pointer-events-none max-md:ml-0 max-md:mb-8">
                                <img
                                    src={imageUrls[currentImageIndex]}
                                    alt=""
                                    className="w-full aspect-[1/1] rounded-[0.8rem] product-img"
                                />
                            </div>
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
                        <div className="w-[47%] text-[#acacac] pl-28 max-md:w-auto max-md:mt-24 max-md:pl-0">
                            <h1 className="text-5xl leading-[1.4] max-md:text-[2.6rem]">オリジナルVRゴーグル</h1>
                            <p className="text-[2rem] font-semibold mt-8 max-md:mt-8">¥1,980 JPY</p>
                            <button type="submit" className="appearance-none text-white text-[1.6rem] font-semibold relative cursor-pointer w-full mt-16 px-10 py-[1.3rem] border-[none] before:content-[''] before:absolute before:transition-[-webkit-transform] before:duration-[0.3s] before:ease-[ease] before:transition-transform before:duration-[0.3s] before:ease-[ease] before:rounded-[0.8rem] before:inset-0" aria-haspopup="dialog">
                                <span className="relative">カートに入れる</span>
                                <div className="loading-overlay hidden">
                                    <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="loading-overlay__spinner--path" fill="none" strokeWidth="6" cx="33" cy="33" r="30"></circle>
                                    </svg>
                                </div>
                            </button>
                            <div className="product-detail__description">
                                <h2>ワールドスキャンプロジェクト（WSP）オリジナルVRゴーグル</h2>
                                <h3>
                                    VRアプリ<Link to="https://meta-tours.jp/meta-diver.php" title="Meta-Diver" target="_blank" className="link"><span>「Meta‐Diver」</span></Link>を100％で楽しむならこれ！！
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
                                <p>VRゴーグルをご購入の際は新しい没入体験ができるアプリ<Link to="https://meta-tours.jp/meta-diver.php" target="_blank" title="メタツアーズ_Meta-Diver" rel="noopener noreferrer" className="link">「Meta-Diver」</Link>をお試しください！</p>
                            </div>
                            <Link to="#" className="group inline-flex items-center text-[1.6rem] font-semibold mt-16 relative hover:before:scale-[1] before:content-[''] before:absolute before:w-full before:h-px before:transition-[0.3s] before:duration-[ease] before:origin-[left_center] before:scale-x-0 before:scale-y-100 before:left-0 before:top-[calc(100%+3px)] before:bg-[#acacac]">
                                <span>詳細を表示</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:opacity-100 max-w-[2rem] opacity-40 ml-2">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0261 8.94868L10.608 5.48679L12.076 4L18 10L12.076 16L10.608 14.5132L14.0261 11.0513H2V8.94868H14.0261Z" fill="#acacac"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
