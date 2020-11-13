import React from "react"
import styled from "styled-components"
import GameTile from "./GameTile"
const GameList = [
  { title: "Call Of Duty: Black Ops - Cold War", prefix: "COD" },
  { title: "Fortnite", prefix: "fortnite" },
  { title: "FIFA 21", prefix: "fifa" },
  { title: "Marvel's Spider-Man: Miles Morales", prefix: "spider" },
  { title: "Assassin's Creed Valhalla", prefix: "creed" },
  { title: "Bugsnax", prefix: "bugsnax" },
  { title: "Doom Eternal", prefix: "doom" },
]
export default function GameBar() {
  return (
    <TileWrapper>
      {GameList.map(game => (
        <>
          <GameTile key={game} imageName={game.prefix} title={game.title} />
        </>
      ))}
    </TileWrapper>
  )
}

const TileWrapper = styled.div`
  position: relative;
  margin-left: 50px;
  display: flex;
  grid-template-columns: repeat(7, 110);
  gap: 10px;
`
