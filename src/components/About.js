import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div``

const Title = styled.h2``

const Cards = styled.div(
    ({ theme }) => `
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 1fr;
    grid-column-gap: ${theme.spacing(4)};
    grid-row-gap: 0px;
`
)

const CardBody = styled.div`
    width: 100%;
    height: 100%;
    transition: all 0.2s;
`
const Card = styled.div`
    position: relative;
    overflow: hidden;
    height: 400px;

    &:hover {
        ${CardBody} {
            transform: translateY(-300px);
            transition: all 0.2s;
        }
    }
`

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border: 0;
`

const CardContent = styled.div``

export default function About() {
    return (
        <AboutContainer>
            <Title>Who Am I?</Title>
            <Cards>
                <Card>
                    <CardBody>
                        <CardImage src="/fam.jpg" />
                        <CardContent>
                            <p>
                                I live in a town in the Canadian Rockies with my
                                loving wife <i>Kat</i> and our Blue Heeler{' '}
                                <i>River</i>. I'm a big believer in work/life
                                balance and working remotely is now a
                                cornerstone of my well-being.
                            </p>
                        </CardContent>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardImage src="/fam.jpg" />
                        <CardContent>
                            <p>
                                One of the most deeply satisfying things in my
                                line of work is taking a complex problem and
                                distilling it down to a simple solution. This
                                isn't always how things work out, but it's
                                something I constantly strive for because
                                complexity is my sworn enemy.
                            </p>
                        </CardContent>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardImage src="/fam.jpg" />
                        <CardContent></CardContent>
                    </CardBody>
                </Card>
            </Cards>
        </AboutContainer>
    )
}
