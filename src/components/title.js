import React from "react"

const Title = ({title, text}) => {

    return (
        <h2 className="section-title">{title}<span className="text-[1.9rem] align-middle ml-[1.3rem] max-md:inline-block max-md:text-[1.4rem]">{text}</span></h2>
    )
}

export default Title
