// Step 1: Import React
import * as React from 'react'
import logo from "../images/myphoto.png"
import Layout from "../components/layout.js"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <img src={logo} alt="Bhatman" />
    </Layout>
    // <main>
    //   <title>Home Page</title>
    //   <h1>Welcome to my Gatsby site!</h1>
    //   <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    //   <img src={logo} alt="Bhatman" />

    // </main>
  )
}

// Step 3: Export your component
export default IndexPage