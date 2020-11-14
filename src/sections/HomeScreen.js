import React, { useState, useEffect } from "react"
import styled from "styled-components"
import GameBar from "../components/GameBar"
import NavBar from "../components/NavBar"
import ButtonBar from "../components/ButtonBar"

import { BackgroundImage } from "../styles/Context.js"
export default function HomeScreen() {
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/backgrounds/sony.jpg"
  )

  return (
    <>
      {/* <BackgroundTheme.Provider> */}
      <BackgroundImage.Provider value={[backgroundImage, setBackgroundImage]}>
        <Wrapper background={backgroundImage}>
          <NavBar />
          <GameBar />

          <ButtonBar />
        </Wrapper>
      </BackgroundImage.Provider>
      {/* </BackgroundTheme.Provider> */}
    </>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${props => `url(${props.background})`};
  background-size: cover;
  opacity: 0.9;
`
