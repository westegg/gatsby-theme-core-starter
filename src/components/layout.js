import React from "react"
import { MDXProvider } from "@mdx-js/tag"

const systemFont = "sans-serif !important"

const components = {
  h1: props => (
    <h1
      style={{
        fontFamily: systemFont,
        fontSize: "2rem"
      }}
      {...props}
    >
      {props.children}
    </h1>
  ),
  p: props => (
    <p
      style={{
        fontFamily: systemFont,
        fontSize: "22px"
      }}
      {...props}
    />
  )
}

export default ({ children }) => (
  <MDXProvider components={components}>
    <section
      style={{
        display: "block",
        maxWidth: "90%",
        width: "650px",
        margin: "2rem auto"
      }}
    >
      {children}
    </section>
  </MDXProvider>
)
