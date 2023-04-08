import React, { useEffect } from "react"
import { initAccordion } from "../hook/accordion"
const FaqItem = ({q, a}) => {
    useEffect(() => {
        initAccordion();
      }, []);
    return (
        <>
            <dl class="faq">
                <dt class="faq__summary ac-summary hover:before:opacity-100 [&.is-open]:before:rotate-180 [&.is-open]:pb-8 before:content-[''] before:absolute before:w-[1.2rem] before:h-[1.2rem] before:opacity-40 before:transition-opacity before:duration-[0.3s] before:ease-[ease] before:right-0 before:top-[0.8rem] transition-[0.3s] duration-[ease] relative cursor-pointer pb-12">
                    <h4 class="faq__summary--head">Q.{q}</h4>
                </dt>
                <dd class="faq__content ac-content transition-[0.3s] duration-[ease] overflow-hidden max-h-0 opacity-0 [&.is-open]:max-h-[var(--max-height)] [&.is-open]:opacity-100">
                    <p class="faq__content--body">A.{a}</p>
                </dd>
            </dl>
        </>
    )
}

export default FaqItem
