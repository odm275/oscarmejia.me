import React from "react"

import "./tags.css"
import { Link } from "gatsby";

const NewTechTag = (props) => {
    const { tag, tech, size, svg } = props

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button
                    className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}>
                      {svg}
                    </div>
                </button>
            </Link>

        </div>

    )
}

export default NewTechTag