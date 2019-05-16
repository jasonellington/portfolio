import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Wrapper from '../components/wrapper'
import Hero from '../components/hero'

class IndexPage extends React.Component {
  render() {
    const siteContent = get(this, 'props.data.contentfulHomePage.content.content')
    const [me] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout>
        <SEO keywords={[`jason`, `ellington`, `web`, `developer`, `jamstack`, `gatsby`]} />
        <Hero />
        <Wrapper>
          <ReactMarkdown source={siteContent} />
        </Wrapper>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulPerson(filter: { contentful_id: { eq: "1zJ7zyhb4fIt05qnWYVdFs" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
