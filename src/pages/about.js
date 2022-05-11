import React from "react"
import myFace from "../images/myface.jpg"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Meself">
            <div>
                <p>This is where I talk about myself in a way that is flattering</p>
                <p>I built this site myself by following a Gatsby tutorial -- </p>
                <p>
                <sub>which I was happy to follow.</sub>
                </p>
                 
                <img src={myFace} alt="This is where my face would go" style={{width: "20em"}}  />
            </div>
            
        </Layout>
    )
}

export default AboutPage