import React from "react"
import styled from "styled-components"
import { H3, MediumText } from "../styles/TextStyles"
import moment from "moment"
export default function NavBar() {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>Games</Text>
        <Text>Media</Text>
      </TextWrapper>
      <IconWrapper>
        <IconContainer>
          <Icon src="/images/icons/search.svg" />
          <IconText>Search</IconText>
        </IconContainer>
        <IconContainer>
          <Icon src="/images/icons/settings.svg" />
          <IconText>Settings</IconText>
        </IconContainer>
        <IconContainer>
          <Profile src="/images/icons/profile.svg" />
          <IconText>Berbaroovez</IconText>
        </IconContainer>
        <Time>{moment().format("LT")}</Time>
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  justify-content: space-between;
`

const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 80px;
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 30px;
`
const Text = styled(H3)`
  padding: 10px 20px;
  position: relative;
  border-radius: 5px;
  :hover {
    border: 3px white solid;
    margin-bottom: -5px; //Used to offset the border adding margin which was pushing the game bar down a little on hover
    margin-right: -2.2px; //same thing as above but to avoid the media text from getting pushed
  }
`

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;

  justify-content: space-evenly;
  width: 500px;
`
const IconContainer = styled.div`
  position: relative;
`

const Icon = styled.img`
  width: 45px;
  border-radius: 40px;
  padding: 10px;
  filter: invert(100%) sepia(10%) saturate(7458%) hue-rotate(179deg)
    brightness(116%) contrast(109%);
  :hover {
    filter: unset;
    background: white;
    transition: 0.5s ease-in-out, filter 0ms;
  }
`

const Profile = styled.img`
  width: 45px;
  border-radius: 40px;
  padding: 10px;

  :hover {
    filter: unset;
    background: white;
    transition: 0.5s ease-in-out;
  }
`
const IconText = styled(MediumText)`
  position: absolute;
  color: white;
  font-weight: bold;
  opacity: 0;
  transition: 0.5s ease-in-out;
  ${IconContainer}:hover & {
    opacity: 1;
  }
`

const Time = styled(H3)`
  color: white;
  font-weight: bold;
`
