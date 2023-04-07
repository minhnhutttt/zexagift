import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const NewsItem = ({ title, text, link = "#" }) => {

    return (
        <div className="w-[calc((100%-4rem)/3)] text-center mr-8 mt-16 max-md:w-[calc((100%-2rem)/2)] max-md:mr-0">
            <Link to={link}>
                <figure className="relative overflow-hidden aspect-[1/1] mb-[1.7rem] rounded-[0.8rem] max-md:mb-6">
                    <StaticImage src="../../images/sample/sample03.png" alt="" />
                </figure>
                <p className="text-[2rem] font-semibold mb-4 max-md:text-2xl">{title}</p>
                <p className="text-[1.6rem] leading-[1.4] mb-4 max-md:text-2xl max-md:mb-2">{text}</p>
            </Link>
        </div>
    )
}

export default NewsItem
