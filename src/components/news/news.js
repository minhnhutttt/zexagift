import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from "gatsby"

const News = () => (
    <>
        <section className="section">
            <div className="inner">
                <h2 className="section-title">NEWS<span>新着情報</span></h2>
                <div className="list-box list-box--col-3">
                    <div className="list-box__item">
                        <Link to="#">
                            <figure className="list-box__item--thumb">
                                <StaticImage src="../../images/sample/sample03.png" alt="" />
                            </figure>
                            <p className="list-box__item--date">January 13, 2023</p>
                            <p className="list-box__item--title">【ZEXAGIFT】2023年03月公開予定。</p>
                        </Link>
                    </div>
                    <div className="list-box__item">
                        <Link to="#">
                            <figure className="list-box__item--thumb">
                                <StaticImage src="../../images/sample/sample03.png" alt="" />
                            </figure>
                            <p className="list-box__item--date">January 13, 2023</p>
                            <p className="list-box__item--title">【ZEXAGIFT】2023年03月公開予定。</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
)

export default News
