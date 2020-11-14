import React from "react"
import styled from "styled-components"
import { MediumText } from "../styles/TextStyles"
export default function ProgressBox() {
  return (
    <>
      <BoxWrapper>
        <Trophy src="/images/icons/trophy.svg" />
        <ProgressWrapper>
          <ProgressText>Progress</ProgressText>
          <ProgressPercent>0%</ProgressPercent>
        </ProgressWrapper>
        <EarnedWrapper>
          <EarnedText>Earned</EarnedText>
          <EarnedPercent>0/41</EarnedPercent>
        </EarnedWrapper>
      </BoxWrapper>
    </>
  )
}

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 40px;
  justify-content: start;
`
const Trophy = styled.img`
  filter: invert(100%) sepia(10%) saturate(7458%) hue-rotate(179deg)
    brightness(116%) contrast(109%);
  height: 70px;
`
const ProgressWrapper = styled.div`
  padding-right: 50px;
  display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
`
const ProgressText = styled(MediumText)``
const ProgressPercent = styled.p`
  font-size: 25px;
`

const EarnedWrapper = styled(MediumText)`
  display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
`

const EarnedText = styled(MediumText)``
const EarnedPercent = styled(MediumText)`
  font-size: 25px;
`
