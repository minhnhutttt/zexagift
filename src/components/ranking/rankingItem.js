import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const RankingItem = ({ title, price, link = "#", handleShowModal }) => {

    return (
        <div className="list-box__item w-[calc((100%-4rem)/3)] text-center mr-8 mt-16 max-md:w-[calc((100%-2rem)/2)] max-md:mr-0">
            <figure className="list-box__item--thumb relative overflow-hidden aspect-[1/1] mb-[1.7rem] rounded-[0.8rem] max-md:mb-6">
                <Link to={link}>
                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                </Link>
                <button className="list-box__item--thumb--btn max-md:hidden absolute z-20 w-16 h-16 cursor-pointer transition-[0.3s] duration-[ease] -translate-x-2/4 -translate-y-2/4 opacity-0 appearance-none mt-12 border-[none] left-2/4 top-2/4 before:content-[''] before:absolute before:w-full before:h-full before:rounded-[100%] before:left-0 before:top-0 after:content-[''] after:absolute after:w-full after:h-full after:rounded-[100%] after:left-0 after:top-0 after:z-[-1] after:transition-[0.3s] after:duration-[ease] after:scale-100 after:bg-[#080d1b]" onClick={handleShowModal}></button>
            </figure>
            <p className="text-[1.6rem] leading-[1.4] mb-4 max-md:text-2xl max-md:mb-2"><Link to={link}>{title}</Link></p>
            <p className="text-[1.6rem] font-semibold max-md:text-2xl">{price}</p>
        </div>
    )
}

export default RankingItem
