import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from "gatsby"

const CartDrawerItem = () => {
    const quantityRef = useRef(null);

    function handleMinusClick() {
        quantityRef.current.stepDown();
    }

    function handlePlusClick() {
        quantityRef.current.stepUp();
    }
    return (
        <dl className="flex justify-between mb-16">
            <dt className="overflow-hidden w-3/12 md:rounded-[0.8rem] max-md:w-[33%]">
                <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
            </dt>
            <dd className="flex flex-[1] flex-wrap justify-between ml-8 max-md:relative max-md:ml-[1.4rem]">
                <div className="w-[70%] text-left mb-[1.4rem] max-md:w-full max-md:mb-4">
                    <p className="text-[1.2rem] mb-[0.8rem] max-md:text-base max-md:mt-[0.3rem] max-md:mb-[0.8rem]">ZEXAGIFT</p>
                    <p className="text-[1.6rem] font-semibold leading-tight max-md:text-2xl"><Link to="#">オリジナルVRゴーグル</Link></p>
                </div>
                <div className="max-md:absolute max-md:right-0 max-md:top-0">
                    <p className="text-[1.6rem] font-semibold whitespace-nowrap text-[#142c73] max-md:text-2xl">¥16,500</p>
                </div>
                <div className="flex w-56 h-20 text-center max-md:w-44 max-md:h-[3.8rem]">
                    <div className="flex overflow-hidden transition-[0.3s] duration-[ease] px-4 py-0 rounded-[0.8rem] border-[solid] border-white bg-white max-md:px-[0.7rem]">
                        <button className="w-[1.6rem] flex items-center justify-center p-0 minus-btn" name="minus" type="button" onClick={handleMinusClick}>
                            <svg className="max-md:w-full theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9H18V11H2V9Z" fill="#acacac"></path>
                            </svg>
                        </button>
                        <input className="font-semibold flex-[1] w-full text-center text-[#acacac] appearance-none border-[none]" type="number" name="updates[]" value="1" min="0" ref={quantityRef} />
                        <button className="w-[1.6rem] flex items-center justify-center p-0 plus-btn" name="plus" type="button" onClick={handlePlusClick}>
                            <svg className="max-md:w-full theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11V18H11V11H18V9H11V2H9V9H2V11H9Z" fill="#acacac"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center mr-auto">
                    <Link to="#" className="ml-12 max-md:max-w-[1.5rem] max-md:ml-[1.8rem]">
                        <svg className="max-md:w-full theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0H8V2H12V0Z" fill="#acacac"></path>
                            <path d="M9 16V8H7V16H9Z" fill="#acacac"></path>
                            <path d="M11 16V8H13V16H11Z" fill="#acacac"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 4H19V6H16.875L16 20H4L3.125 6H1V4ZM5.1289 6H14.8711L14.1211 18H5.8789L5.1289 6Z" fill="#acacac"></path>
                        </svg>
                    </Link>
                </div>
            </dd>
        </dl>
    )
}

export default CartDrawerItem
