import React from "react"
import myFace from "../images/myface.jpg"
import {Link} from "gatsby"

const AboutPage = () => {
    return (
        <main> 
            <title>About Meself</title>
            <h1>Hey, Look it's about me</h1>
            <Link to="/">Back to Home</Link>
            <p>This is where I talk about myself in a way that is flattering</p>
            <p>I built this site myself with Gatsby which I was forced to use</p>
            <img src={myFace} alt="This is where my face would go" Style="width: 25%;" />
        </main>

    )
}

export default AboutPage