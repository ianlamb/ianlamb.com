import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/common'
import theme from '../theme'

export const WorldImage = styled.img`
    display: block;
    max-width: 1280px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    margin-top: ${theme.spacing(4)};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin-top: 0;
    }
`

export const Stats = styled.dl`
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        display: block;
    }
`

export const StatName = styled.dt`
    grid-row-start: 1;
    grid-row-end: 1;
    color: ${theme.palette.text.muted};
    font-size: 0.85rem;
    text-transform: uppercase;
`

export const StatValue = styled.dd`
    grid-row-start: 2;
    grid-row-end: 2;
    margin: 0;
    font-size: 1.25rem;

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin-bottom: ${theme.spacing(2)};
    }
`

export const BigNumber = styled.span`
    color: ${theme.palette.text.primary};
    font-size: 2rem;
`

const WorldMap = () => {
    return (
        <div>
            <Container>
                <h2>Earthly Meanderings</h2>
                <Stats>
                    <StatName>Born &amp; Raised</StatName>
                    <StatValue>
                        <span>London, Ontario</span>{' '}
                        <img
                            src="/flag-ca.png"
                            height="15px"
                            alt="canadian flag"
                        />
                    </StatValue>
                    <StatName>Worked Abroad</StatName>
                    <StatValue>
                        <span>Irvine, California</span>{' '}
                        <img
                            src="/flag-us.png"
                            height="15px"
                            alt="american flag"
                        />
                    </StatValue>
                    <StatName>Currently Live</StatName>
                    <StatValue>
                        <span>Nelson, British Columbia</span>{' '}
                        <img
                            src="/flag-ca.png"
                            height="15px"
                            alt="canadian flag"
                        />
                    </StatValue>
                </Stats>
                <Stats>
                    <StatName>Countries Visited</StatName>
                    <StatValue>
                        <BigNumber>11</BigNumber> of 195
                    </StatValue>
                    <StatName>Canadian Provinces Visited</StatName>
                    <StatValue>
                        <BigNumber>6</BigNumber> of 10
                    </StatValue>
                    <StatName>American States Visited</StatName>
                    <StatValue>
                        <BigNumber>21</BigNumber> of 50
                    </StatValue>
                </Stats>
            </Container>
            <WorldImage src="/world.svg" alt="world map" />
        </div>
    )
}

export default WorldMap
