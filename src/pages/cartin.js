import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pickup from "../components/pickup/pickup"
import Category from "../components/category/category"
import Ranking from "../components/ranking/ranking"
import News from "../components/news/news"

const CartPage = () => (
    <Layout>
        <Pickup />
        <Category />
        <Ranking />
        <News />
    </Layout>
)

export const Head = () => <Seo title="Cartin" />

export default CartPage
