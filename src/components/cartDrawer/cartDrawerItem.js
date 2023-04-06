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
        <dl className="cart-drawer__item">
            <dt className="cart-drawer__item--thumb">
                <StaticImage src="../../images/sample/sample01.jpeg" alt="" />
            </dt>
            <dd className="cart-drawer__item--detail">
                <div className="cart__meta">
                    <p className="cart__meta--name">ZEXAGIFT</p>
                    <p className="cart__meta--title"><Link to="#">オリジナルVRゴーグル</Link></p>
                </div>
                <div className="cart__total">
                    <p className="cart__total--price">¥16,500</p>
                </div>
                <div className="cart__quantity">
                    <div className="cart__quantity--val">
                        <button className="cart__quantity--button minus-btn" name="minus" type="button" onClick={handleMinusClick}>
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9H18V11H2V9Z" fill="#acacac"></path>
                            </svg>
                        </button>
                        <input className="cart__quantity--input" type="number" name="updates[]" value="1" min="0" ref={quantityRef} />
                        <button className="cart__quantity--button plus-btn" name="plus" type="button" onClick={handlePlusClick}>
                            <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 11V18H11V11H18V9H11V2H9V9H2V11H9Z" fill="#acacac"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="cart__remove">
                    <Link to="#" className="cart__remove--button">
                        <svg className="theme-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
