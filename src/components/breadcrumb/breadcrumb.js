import React from 'react';
import { Link } from "gatsby"

const Breadcrumb = ({ items }) => {
    return (
        <div className="mb-16 max-md:mb-0 max-md:px-[5%] max-md:py-12 max-w-[120rem] mx-auto">
            <ul className="flex items-center">
                {items.map((item, index) => (
                    <li className="text-[1.2rem] text-[#acacac] relative mr-12" key={index}>
                        {item.link ? (
                            <Link className='bg-arw_right after:content-[""] after:w-[1.2rem] after:h-[1.6rem] after:absolute after:right-[-2rem] after:translate-x-0 after:-translate-y-2/4 after:opacity-40 after:top-2/4' to={item.link}>{item.label}</Link>
                        ) : (
                            item.label
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumb;
