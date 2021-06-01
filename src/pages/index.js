import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import Testimonials from "../components/Testimonials";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favourite Destinations" />
    <Testimonials />
  </Layout>
)

export default IndexPage
