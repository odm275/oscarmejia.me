import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./sidebar.css"

import Img from "gatsby-image"

const Bio = ({ author, tagline }) => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "2020vision.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log('data:', data)
    return (
        <div className="bio-main w-75">
            <Img fixed={data.file.childImageSharp.fixed} className="profile-img" alt="profile image"/> 
            {/* <img src={myPicture} style={{ maxWidth: `100px` }} className="profile-img" alt="" /> */}
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline}</small>
        </div>
    )
}

export default Bio