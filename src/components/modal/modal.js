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
        <div className={`modal ${show ? '!flex' : ''}`}>
            <div className="fixed inset-0" onClick={handleClose}></div>
            <div className="modal-content modal-product">
                <div className="modal-close" onClick={handleClose}>
                    <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 10.0563L2.41421 16.1421L3.82843 17.5563L9.91421 11.4706L16.1421 17.6985L17.5563 16.2843L11.3284 10.0563L17.9706 3.41421L16.5563 2L9.91421 8.64214L3.41421 2.14214L2 3.55635L8.5 10.0563Z" fill="#acacac"></path>
                    </svg>
                </div>
                <div className="modal-container">
                    <div className="product-wrap inner">
                        <div className="product-slider">
                            <div className="product-slider__main">
                                <img
                                    src={imageUrls[currentImageIndex]}
                                    alt=""
                                    className="product-slider__main--img product-img"
                                />
                            </div>
                            <ul className="product-slider__thumb">
                                {data.allFile.edges.map(({ node }, index) => (
                                    <li key={index} className="product-slider__thumb--item">
                                        <img
                                            src={node.publicURL}
                                            className="product-slider__thumb--img"
                                            onClick={() => handleImageClick(index)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="product-detail">
                            <h1 className="product-detail__title">オリジナルVRゴーグル</h1>
                            <p className="product-detail__price">¥1,980 JPY</p>
                            <button type="submit" className="product-detail__btn" aria-haspopup="dialog">
                                <span>カートに入れる</span>
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
                            <Link to="#" className="modal-product__btn line-btn">
                                <span>詳細を表示</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
