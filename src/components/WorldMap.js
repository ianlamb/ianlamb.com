import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '../components/common'

export const WorldImage = styled.img(
    ({ theme }) => `
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
)

export const Stats = styled.dl(
    ({ theme }) => `
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
)

export const StatName = styled.dt(
    ({ theme }) => `
    grid-row-start: 1;
    grid-row-end: 1;
    color: ${theme.palette.text.muted};
    font-size: 0.85rem;
    text-transform: uppercase;
`
)

export const StatValue = styled.dd(
    ({ theme }) => `
    grid-row-start: 2;
    grid-row-end: 2;
    margin: 0;
    font-size: 1.25rem;

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin-bottom: ${theme.spacing(2)};
    }
`
)

export const BigNumber = styled.span(
    ({ theme }) => `
    color: ${theme.palette.text.primary};
    font-size: 2rem;
`
)

const WorldMap = ({ travel }) => {
    return (
        <div>
            <Container>
                <h2>Earthly Meanderings</h2>
                <Stats>
                    <StatName>Born &amp; Raised</StatName>
                    <StatValue>
                        <a
                            href="https://goo.gl/maps/oPKaCohrrtDauBLb8"
                            rel="noreferrer"
                            target="_blank"
                        >
                            London, Ontario
                        </a>{' '}
                        <img
                            src="/flag-ca.png"
                            height="15px"
                            alt="canadian flag"
                        />
                    </StatValue>
                    <StatName>Worked Abroad</StatName>
                    <StatValue>
                        <a
                            href="https://goo.gl/maps/Z2wBtqBQ3gWsearF9"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Irvine, California
                        </a>{' '}
                        <img
                            src="/flag-us.png"
                            height="15px"
                            alt="american flag"
                        />
                    </StatValue>
                    <StatName>Currently Live</StatName>
                    <StatValue>
                        <a
                            href="https://goo.gl/maps/ims1tRTAKx22h1Vh9"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Nelson, British Columbia
                        </a>{' '}
                        <img
                            src="/flag-ca.png"
                            height="15px"
                            alt="canadian flag"
                        />
                    </StatValue>
                </Stats>
                <Stats>
                    {travel.map((stat) => (
                        <React.Fragment key={stat.label}>
                            <StatName>{stat.label}</StatName>
                            <StatValue>
                                <BigNumber>{stat.value}</BigNumber>
                                {stat.max ? ` of ${stat.max}` : ''}
                            </StatValue>
                        </React.Fragment>
                    ))}
                </Stats>
            </Container>
            <WorldImage src="/world.svg" alt="world map" />
        </div>
    )
}

WorldMap.propTypes = {
    travel: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.number,
            max: PropTypes.number,
        })
    ),
}

export default WorldMap
