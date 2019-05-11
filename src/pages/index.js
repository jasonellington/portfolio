import React from "react"
import ReactMarkdown from "react-markdown"
import { Link, graphql } from "gatsby"

import Banner from "../components/banner"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data.contentfulHomePage.content.content);
  return(
    <Layout>
      <Banner />
      <SEO keywords={[`jason`, `ellington`, `web`, `developer`, `jamstack`, `gatsby`]} />
      <ReactMarkdown source={data.contentfulHomePage.content.content} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
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
