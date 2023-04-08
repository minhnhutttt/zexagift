import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const CategoryItem = ({title, link = "#"}) => {

    return (
        <div className="md:!w-[calc((100%-6rem)/4)] mr-8 mt-8 swiper-slide">
            <Link to={link} className="block overflow-hidden text-center md:rounded-[0.8rem] md:bg-[#f6f7fa] group">
                <figure className="aspect-[1/1] md:border-b md:border-b-[rgba(172,172,172,0.3)] max-md:overflow-hidden max-md:rounded-[0.8rem]">
                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                </figure>
                <p className="text-[1.6rem] max-md:text-2xl font-semibold px-8 py-[1.7rem]">
                    <span className="group-hover:before:scale-[1.1] relative inline-block max-md:before:hidden before:content-[''] before:absolute before:w-full before:h-0.5 before:transition-[0.3s] before:duration-[ease] before:origin-[left_center] before:scale-x-0 before:scale-y-100 before:left-0 before:top-[calc(100%_+_3px)] before:bg-[#acacac]">{title}</span>
                </p>
            </Link>
        </div>
    )
}

export default CategoryItem
