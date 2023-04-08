import { Link } from "gatsby";
import React from "react"

const Button = ({to, children}) => {

    return (
        <>
            {to ?
                <Link to={to} className="relative inline-block hover:before:scale-[1] before:content-[''] before:absolute before:w-full before:h-px before:transition-[0.3s] before:duration-[ease] before:origin-[left_center] before:scale-x-0 before:scale-y-100 before:left-0 before:top-[calc(100%+3px)] before:bg-[#acacac]">{children}</Link>
                : 
                <span className="relative inline-block hover:before:scale-[1] before:content-[''] before:absolute before:w-full before:h-px before:transition-[0.3s] before:duration-[ease] before:origin-[left_center] before:scale-x-0 before:scale-y-100 before:left-0 before:top-[calc(100%+3px)] before:bg-[#acacac]">{children}</span>
            }
        </>
    )
}

export default Button
