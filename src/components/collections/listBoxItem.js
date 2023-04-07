import React from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const ListBoxItem = ({ title, link = "#" }) => {

    return (
        <div className="w-[calc((100%-10rem)/6)] mr-8 mt-8 max-md:w-[calc((100%-2rem)/2)] max-md:mr-0 max-md:mt-16">
            <Link to={link} className="block overflow-hidden text-center rounded-[0.8rem] max-md:rounded-none md:bg-[#f6f7fa]">
                <figure className="aspect-[1/1] md:border-b md:border-b-[rgba(172,172,172,0.3)] max-md:rounded-[0.8rem] max-md:overflow-hidden">
                    <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
                </figure>
                <p className="text-2xl font-semibold px-4 py-[1.7rem] max-md:py-6">
                    <span className="relative inline-block">{title}</span>
                </p>
            </Link>
        </div>
    )
}

export default ListBoxItem
