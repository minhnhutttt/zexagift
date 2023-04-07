import React, { useState, useEffect } from "react"

import Modal from "../modal/modal";
import Title from "../title";
import RankingItem from "./rankingItem";

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
            <section className="md:mt-40 max-md:mt-32 max-md:px-[5%] max-md:py-0">
                <div className="max-w-[120rem] mx-auto">
                    <Title title="RANKING" text="人気商品ランキング" />
                    <div className="flex flex-wrap max-md:justify-between list-box--col-3 md:[&>*:nth-child(-n+3)]:mt-0 max-md:[&>*:nth-child(-n+3)]:mt-16 max-md:[&>*:nth-child(-n+2)]:mt-0 [&>*:nth-child(3n)]:mr-0">
                        <RankingItem title="オリジナルVRゴーグル" price="¥1,980 JPY" handleShowModal={handleShowModal} />
                        <RankingItem title="オリジナルVRゴーグル" price="¥1,980 JPY" handleShowModal={handleShowModal} />
                        <RankingItem title="オリジナルVRゴーグル" price="¥1,980 JPY" handleShowModal={handleShowModal} />
                        <RankingItem title="オリジナルVRゴーグル" price="¥1,980 JPY" handleShowModal={handleShowModal} />
                        <RankingItem title="オリジナルVRゴーグル" price="¥1,980 JPY" handleShowModal={handleShowModal} />
                    </div>
                </div>
            </section>
            <Modal show={showModal} handleClose={handleCloseModal} />
        </>
    )
}

export default Ranking
