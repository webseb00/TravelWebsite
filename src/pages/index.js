import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero";
import Trips from "../components/Trips";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favourite Destinations" />
  </Layout>
)

export default IndexPage
