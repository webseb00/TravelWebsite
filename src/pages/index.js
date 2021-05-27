import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
