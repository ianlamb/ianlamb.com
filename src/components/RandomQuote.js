import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { shuffle } from 'lodash-es'

const Quote = styled.div(
    ({ theme }) => `
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
    background: ${theme.palette.magicGradient};
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.25s ease;
`
)

const QuoteContainer = styled.div(
    ({ theme }) => `
    position: relative;
    max-width: 760px;
    margin: ${theme.spacing(6)} auto;
    padding: ${theme.spacing(4)} ${theme.spacing(14)};
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    clip-path: polygon(${theme.spacing(
        10
    )} 0, 100% 0, calc(100% - ${theme.spacing(10)}) 100%, 0 100%);

    &:hover {
        ${Quote} {
            transform: translateY(-2px);
            background-size: 150%;
        }
    }

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        clip-path: none;
        width: 100%;
        max-width: none;
        padding: ${theme.spacing(6)} ${theme.spacing(4)};
        margin: 0 auto;
    }
`
)

const Source = styled.div(
    ({ theme }) => `
    font-size: 1rem;
    color: ${theme.palette.text.muted};
`
)

const RandomQuote = ({ quotes }) => {
    const shuffledQuotes = React.useRef(shuffle(quotes))
    const [quoteIndex, setQuoteIndex] = React.useState(0)
    const quote = shuffledQuotes.current[quoteIndex]

    const nextQuote = () => {
        setQuoteIndex(
            quoteIndex < shuffledQuotes.current.length - 1 ? quoteIndex + 1 : 0
        )
    }

    const onClick = () => nextQuote()

    return (
        <QuoteContainer onClick={onClick}>
            <Quote>&ldquo;{quote.quote}&rdquo;</Quote>
            <Source>&mdash;{quote.author}</Source>
        </QuoteContainer>
    )
}

RandomQuote.propTypes = {
    quotes: PropTypes.arrayOf(
        PropTypes.shape({
            quote: PropTypes.string,
            author: PropTypes.string,
        })
    ),
}

export default RandomQuote
