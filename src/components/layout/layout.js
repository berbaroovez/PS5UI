import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../../styles/GlobalStyle"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
