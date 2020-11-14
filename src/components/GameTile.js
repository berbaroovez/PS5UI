import React, { useContext } from "react"
import styled from "styled-components"
import { H3 } from "../styles/TextStyles"
import { BackgroundImage } from "../styles/Context"

export default function GameTile({ imageName, title }) {
  const [backgroundImage, setBackgroundImage] = useContext(BackgroundImage)
  const handleClick = e => {
    var names = e.target.className.split(" ")
    var backgroundName = names.slice(-1)[0]
    console.log(backgroundName)
    setBackgroundImage(`/images/backgrounds/${backgroundName}.jpg`)
  }

  return (
    <Wrapper className={imageName} onClick={handleClick}>
      <Tile
        className={imageName}
        src={`/images/${imageName}.jpg` || "/images/spider.jpg"}
        alt={title || "Game Tile"}
      />
      <GameTitle>{title}</GameTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Tile = styled.img`
  width: 110px;
  border-radius: 20px;
  margin: 0px;
  padding: 0px;
  transition: 0.2s ease-in-out;
  :hover {
    width: 160px;
    border: 5px solid white;
  }
`

const GameTitle = styled(H3)`
  pointer-events: none;
  position: absolute;
  width: 1000px;
  z-index: 10;
  bottom: 10px;
  right: -1010px;
  opacity: 0;
  transition: 0.1s;

  ${Wrapper}:hover & {
    opacity: 100;
    transition: 0.5s ease-in-out;
  }
`
