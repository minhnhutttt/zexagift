import React, { useState, useEffect } from "react"
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from "gatsby"
import Modal from "../modal/modal";

const Ranking = () => {
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        const body = document.body
        if (showModal) {
            body.classList.add("overflow-hidden")
        } else {
            body.classList.remove("overflow-hidden")
        }
    }, [showModal])
    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }
    return (
        <>
            <section className="section">
                <div className="inner">
                    <h2 className="section-title">RANKING<span>人気商品ランキング</span></h2>
                    <div className="list-box list-box--col-3">
                        <div className="list-box__item">
                            <figure className="list-box__item--thumb">
                                <Link to="#">
                                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                </Link>
                                <button className="list-box__item--thumb--btn modal-btn" onClick={handleShowModal} data-modal="modal01"></button>
                            </figure>
                            <p className="list-box__item--title"><Link to="#">オリジナルVRゴーグル</Link></p>
                            <p className="list-box__item--price">¥1,980 JPY</p>
                        </div>
                        <div className="list-box__item">
                            <figure className="list-box__item--thumb">
                                <Link to="#">
                                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    <StaticImage src="../../images/sample/sample02.jpeg" alt="" />
                                </Link>
                                <button className="list-box__item--thumb--btn modal-btn" data-modal="modal02"></button>
                            </figure>
                            <p className="list-box__item--title"><Link to="#">オリジナルVRゴーグル</Link></p>
                            <p className="list-box__item--price">¥1,980 JPY</p>
                        </div>
                        <div className="list-box__item">
                            <figure className="list-box__item--thumb">
                                <Link to="#">
                                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    <StaticImage src="../../images/sample/sample02.jpeg" alt="" />
                                </Link>
                                <button className="list-box__item--thumb--btn modal-btn" data-modal="modal03"></button>
                            </figure>
                            <p className="list-box__item--title"><Link to="#">オリジナルVRゴーグル</Link></p>
                            <p className="list-box__item--price">¥1,980 JPY</p>
                        </div>
                        <div className="list-box__item">
                            <figure className="list-box__item--thumb">
                                <Link to="#">
                                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    <StaticImage src="../../images/sample/sample02.jpeg" alt="" />
                                </Link>
                                <button className="list-box__item--thumb--btn modal-btn" data-modal="modal04"></button>
                            </figure>
                            <p className="list-box__item--title"><Link to="#">オリジナルVRゴーグル</Link></p>
                            <p className="list-box__item--price">¥1,980 JPY</p>
                        </div>
                        <div className="list-box__item">
                            <figure className="list-box__item--thumb">
                                <Link to="#">
                                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                                    <StaticImage src="../../images/sample/sample02.jpeg" alt="" />
                                </Link>
                                <button className="list-box__item--thumb--btn modal-btn" data-modal="modal05"></button>
                            </figure>
                            <p className="list-box__item--title"><Link to="#">オリジナルVRゴーグル</Link></p>
                            <p className="list-box__item--price">¥1,980 JPY</p>
                        </div>
                    </div>
                </div>
            </section>
            <Modal show={showModal} handleClose={handleCloseModal} />
        </>
    )
}

export default Ranking
