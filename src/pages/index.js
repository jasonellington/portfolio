import React from "react"
import ReactMarkdown from "react-markdown"
import { Link, graphql } from "gatsby"

import Banner from "../components/banner"
import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data.contentfulHomePage.content.content);
  return(
    <Layout>
      <SEO keywords={[`jason`, `ellington`, `web`, `developer`, `jamstack`, `gatsby`]} />
      <Banner />
      <ReactMarkdown source={data.contentfulHomePage.content.content} />
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulHomePage {
      title
      date
      content {
        content
      }
      image {
        file {
          url
        }
      }
    }
  }
`

export default IndexPage
