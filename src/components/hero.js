import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import styles from './hero.module.css'


const Hero = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <div className={styles.heroDetails}>
              <h3 className={styles.heroHeadline}>Hi, I'm Jason</h3>
            </div>
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledHero = styled(Hero)`
  width: 100%;
  height: 70vh;
  max-height: 500px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export default StyledHero
