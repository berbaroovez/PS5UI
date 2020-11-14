import React from "react"
import styled from "styled-components"

export default function TestProp() {
  return <Picture src="/images/spider.jpg" />
}

const Picture = styled.img`
  margin: 0;
  padding: 0;
`
