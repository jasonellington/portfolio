import React from "react"
import ReactMarkdown from "react-markdown"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  console.log(data.contentfulHomePage.content.content);
  return(
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ReactMarkdown source={data.contentfulHomePage.content.content} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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
