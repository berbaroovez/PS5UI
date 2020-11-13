import React from "react"
import styled from "styled-components"
import { H3 } from "../styles/TextStyles"
export default function GameTile({ imageName, title }) {
  return (
    <Wrapper>
      <Tile
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
    border: 5px solid black;
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
