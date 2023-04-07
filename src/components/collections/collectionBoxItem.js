import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const CollectionBoxItem = ({ title, meta, price, link = "#", loading = false }) => {

    return (
        <div className="collection-box__item">
            <Link to={link}>
                <figure className="collection-box__item--thumb">
                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                </figure>
                <p className="collection-box__item--meta">{meta}</p>
                <p className="collection-box__item--title">{title}</p>
                <p className="collection-box__item--price">{price}</p>
            </Link>
            <button type="submit" className={`collection-box__item--btn ${loading ? 'opacity-40' : ''}`} aria-haspopup="dialog">
                <span className={`${loading ? 'opacity-0' : '' }`}>カートに入れる</span>
                <div className={`loading-overlay ${!loading ? 'hidden' : '' }`}>
                    <svg aria-hidden="true" focusable="false" role="presentation" className="loading-overlay__spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle className="loading-overlay__spinner--path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default CollectionBoxItem
