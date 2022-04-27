import React from "react"
import myFace from "../images/myface.jpg"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Meself">
            <p>This is where I talk about myself in a way that is flattering</p>
            <p>I built this site myself with Gatsby which I was forced to use</p>
            <img src={myFace} alt="This is where my face would go" Style="width: 25%" />
        </Layout>
    )
}

export default AboutPage