import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  backgroundSelected: {
    COD: 'url("/images/backgrounds/COD.jpg")',
    fortnite: 'url("/images/backgrounds/fortnite.jpg")',
    fifa: 'url("/images/backgrounds/fifa.jpg")',
    spider: 'url("/images/backgrounds/spider.jpg")',
    creed: 'url("/images/backgrounds/creed.jpg")',
    bugsnax: 'url("/images/backgrounds/bugsnax.jpg")',
    doom: 'url("/images/backgrounds/doom.jpg")',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
