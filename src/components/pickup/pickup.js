import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from "gatsby"

const Pickup = () => (
    <>
        <section className="front-pickup max-w-[120rem] mx-auto">
            <ul className="front-pickup__nav">
                <li className="front-pickup__nav--item"><Link to="#">ギフトカード</Link></li>
                <li className="front-pickup__nav--item"><Link to="#">VRゴーグル</Link></li>
                <li className="front-pickup__nav--item"><Link to="#">コスメ・スキンケア</Link></li>
                <li className="front-pickup__nav--item"><Link to="#">雑貨</Link></li>
            </ul>
            <div className="front-pickup__product">
                <Link to="#">
                    <StaticImage src="../../images/top/pickup_img01.jpg" className="front-pickup__product--img" alt="" />
                    <button className="front-pickup__product--btn zoom-btn"><span>今すぐ購入</span></button>
                </Link>
            </div>
        </section>
    </>
)

export default Pickup
