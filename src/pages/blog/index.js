import * as React from 'react'
import Layout from '../../components/layout'
import {Link, graphql } from 'gatsby'

function BlogPage({data}){
    return (
        <Layout pageTitle="My Blog Posts">
                {data.allMdx.nodes.map(node => (
                <article key={node.name}>
                    <Link to={`/blog/${node.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>))
            }
        </Layout>
    )
}

export const queryBlog = graphql `
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
              }
              id
              slug
            }
          }
    }
`

export default BlogPage