import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const CollectionBoxItem = ({ title, meta, price, link = "#", loading = false }) => {

    return (
        <div className="collection-box__item w-[calc((100%-6rem)/4)] text-center mr-8 mt-16 max-md:w-[calc((100%-2rem)/2)] max-md:mr-0 [&:nth-of-type(4n)]:mr-0 md:[&:nth-of-type(-n+4)]:mt-0 max-md:[&:nth-of-type(-n+2)]:mt-0">
            <Link to={link} className="block">
                <figure className="aspect-[1/1] overflow-hidden relative mb-[1.7rem] rounded-[0.8rem] max-md:mb-6">
                    <StaticImage src="../../images/sample/sample01.jpeg" className="w-full h-full object-cover object-center" alt="" />
                </figure>
                <p className="text-[1.2rem] mb-2 max-md:text-base">{meta}</p>
                <p className="text-[1.6rem] leading-[1.4] mb-[0.8rem] max-md:text-2xl">{title}</p>
                <p className="text-[1.6rem] font-semibold max-md:text-2xl">{price}</p>
            </Link>
            <button type="submit" className={`collection-box__item--btn before:bg-[#494676] appearance-none text-white text-[1.6rem] font-semibold relative cursor-pointer mt-[1.8rem] px-10 py-[1.3rem] border-[none] max-md:text-[1.4rem] max-md:mt-6 max-md:px-6 max-md:py-[1.3rem] before:content-[''] before:absolute before:z-[-1] before:transition-transform before:duration-[0.3s] before:ease-[ease] before:rounded-[0.8rem] before:inset-0 hover:before:scale-[1.05] ${loading ? 'opacity-40' : ''}`} aria-haspopup="dialog">
                <span className={`block transition-opacity duration-[0.3s] ease-[ease] pl-12 max-md:pl-8 ${loading ? 'opacity-0' : '' }`}>カートに入れる</span>
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
