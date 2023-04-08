import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from "gatsby"

const Pickup = () => (
    <>
        <section className="flex justify-between mb-40 max-md:block max-md:mb-32 max-md:px-[5%] max-md:py-0 max-w-[120rem] mx-auto">
            <ul className="front-pickup__nav w-[22.4rem] relative p-4 max-md:hidden bg-[#142042] [&>*:nth-of-type(1)]:mt-[-1.8rem] before:content-[''] before:absolute before:top-[-4rem] before:z-[-1] before:bg-[#142042] before:rounded-[0.8rem] before:bottom-0 before:inset-x-0">
                <li className="front-pickup__nav--item"><Link to="#" className="text-[1.6rem] font-semibold block transition-[0.3s] duration-[ease] px-4 py-[1.8rem] rounded-[0.8rem] hover:bg-[#494676]">ギフトカード</Link></li>
                <li className="front-pickup__nav--item"><Link to="#" className="text-[1.6rem] font-semibold block transition-[0.3s] duration-[ease] px-4 py-[1.8rem] rounded-[0.8rem] hover:bg-[#494676]">VRゴーグル</Link></li>
                <li className="front-pickup__nav--item"><Link to="#" className="text-[1.6rem] font-semibold block transition-[0.3s] duration-[ease] px-4 py-[1.8rem] rounded-[0.8rem] hover:bg-[#494676]">コスメ・スキンケア</Link></li>
                <li className="front-pickup__nav--item"><Link to="#" className="text-[1.6rem] font-semibold block transition-[0.3s] duration-[ease] px-4 py-[1.8rem] rounded-[0.8rem] hover:bg-[#494676]">雑貨</Link></li>
            </ul>
            <div className="block overflow-hidden relative h-[45rem] flex-[1] ml-8 rounded-[0.8rem] max-md:h-auto max-md:ml-0">
                <Link to="#" className="block h-full">
                    <StaticImage src="../../images/top/pickup_img01.jpg" alt="" className="w-full h-full object-cover object-center" />
                    <button className="absolute md:left-28 md:bottom-40 max-md:relative max-md:block max-md:h-auto max-md:w-full max-md:mt-16 text-[1.6rem] font-semibold cursor-pointer text-white appearance-none px-10 py-[1.3rem] border-[none] hover:before:scale-[1.05] content-[''] before:absolute  before:transition-transform before:duration-[0.3s] before:ease-[ease] before:rounded-[0.8rem] before:inset-0  before:bg-[#494676] "><span className="relative">今すぐ購入</span></button>
                </Link>
            </div>
        </section>
    </>
)

export default Pickup
