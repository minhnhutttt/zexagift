import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image';

import { Link } from "gatsby"
import Title from "../title";
import NewsItem from "./newsItem";

const News = () => (
    <>
        <section className="md:mt-40 max-md:mt-32 max-md:px-[5%] max-md:py-0">
            <div className="max-w-[120rem] mx-auto">
                <Title title="NEWS" text="新着情報" />
                <div className="flex flex-wrap max-md:justify-between list-box--col-3 md:[&>*:nth-child(-n+3)]:mt-0 [&>*:nth-child(3n)]:mr-0">
                    <NewsItem title="January 13, 2023" text="【ZEXAGIFT】2023年03月公開予定。" />
                    <NewsItem title="January 13, 2023" text="【ZEXAGIFT】2023年03月公開予定。" />
                </div>
            </div>
        </section>
    </>
)

export default News
