import React from 'react'
import styled from "styled-components"
import { Container } from "../components/common"
import theme from "../theme"

export const WorldImage = styled.img`
    width: calc(100% - ${theme.spacing(16)});
    height: auto;
    margin: ${theme.spacing(4)} ${theme.spacing(8)};
`

const WorldMap = () => {
    return (
        <div>
          <Container>
            <h2>Earthly Wanderings</h2>
            <dl>
              <dt>Born &amp; Raised</dt>
              <dd>London, Ontario <img src="/flag-ca.png" height="15px" alt="canadian flag" /></dd>
              <dt>Worked Abroad</dt>
              <dd>Irvine, California <img src="/flag-us.png" height="15px" alt="american flag" /></dd>
              <dt>Currently Live</dt>
              <dd>Nelson, British Columbia <img src="/flag-ca.png" height="15px" alt="canadian flag" /></dd>
              <dt>Countries Visited</dt>
              <dd>11</dd>
              <dt>Provinces Visited</dt>
              <dd>6 of 10</dd>
              <dt>States Visited</dt>
              <dd>21 of 50</dd>
            </dl>
          </Container>
          <WorldImage src="/world.svg" alt="world map" />
        </div>
    )
}

export default WorldMap