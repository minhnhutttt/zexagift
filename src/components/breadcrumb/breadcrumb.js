import React from 'react';
import { Link } from "gatsby"

const Breadcrumb = ({ items }) => {
    return (
        <div className="breadcrumb max-w-[120rem] mx-auto">
            <ul className="breadcrumb__list">
                {items.map((item, index) => (
                    <li className="breadcrumb__list--item" key={index}>
                        {item.link ? (
                            <Link to={item.link}>{item.label}</Link>
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
