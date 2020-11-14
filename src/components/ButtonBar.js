import React from "react"
import styled from "styled-components"
import { H2, H3 } from "../styles/TextStyles"
import ProgressBox from "./ProgressBox"

export default function ButtonBar() {
  return (
    <ButtonWrapper>
      <LeftSideWrapper>
        <PlayButton>Play</PlayButton>
        <MoreButton>
          <MoreButtonText>...</MoreButtonText>
        </MoreButton>
      </LeftSideWrapper>
      <ProgressBox />
    </ButtonWrapper>
  )
}
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 80px;
  display: grid;
  grid-template-columns: 500px auto;
  justify-content: space-between;
  width: 90vw;
`

const LeftSideWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 60px;
  gap: 10px;
  position: relative;
`
const PlayButton = styled(H3)`
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 10px 50px;
  border-radius: 30px;
  height: 60px;
`

const MoreButton = styled(H2)`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  height: 60px;
  border-radius: 30px;
`
const MoreButtonText = styled.p`
  position: absolute;
  left: 13px;
  top: -2px;
  pointer-events: none;
  user-select: none;
`

const ProgressWrapper = styled.div``
