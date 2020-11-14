import React from "react"
import styled from "styled-components"
import GameBar from "../components/GameBar"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import NavBar from "../components/NavBar"
import Theme from "../styles/Theme"
import ButtonBar from "../components/ButtonBar"

export default function HomeScreen() {
  const themeContext = useContext(ThemeContext)
  console.log("Current Theme: ", themeContext)
  return (
    <>
      <Theme>
        <Wrapper>
          <NavBar />
          <GameBar />

          <ButtonBar />
        </Wrapper>
      </Theme>
    </>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${props => props.theme.backgroundSelected.spider};
  background-size: cover;
  opacity: 0.9;
`
