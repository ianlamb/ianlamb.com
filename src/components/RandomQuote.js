import React from "react"
import styled from "styled-components"
import theme from "../theme"

const quotes = [
    {
        text: "Instead of cursing the darkness, light a candle.",
        source: "Benjamin Franklin"
    },
    {
        text: "Wealth consists not in having great possessions, but in having few wants.",
        source: "Epictetus"
    }
]

const QuoteContainer = styled.div`
    margin: ${theme.spacing(6)} auto;

    &:before {
        position: relative;
        display: block;
        content: '';
        width: ${theme.quoteDecorationSize}px;
        left: calc(50% - ${theme.quoteDecorationSize/2}px);
        top: -${theme.spacing(2)};
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }
    &:after {
        position: relative;
        display: block;
        content: '';
        width: ${theme.quoteDecorationSize}px;
        left: calc(50% - ${theme.quoteDecorationSize/2}px);
        bottom: -${theme.spacing(2)};
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
`

const Quote = styled.div`
    font-size: 1.5rem;
    font-style: italic;
`
const Source = styled.div`
    font-size: 1rem;
`

const RandomQuote = () => {
    const quote = quotes[Math.round(Math.random() * (quotes.length - 1))]
    return (
        <QuoteContainer>
            <Quote>&ldquo;{quote.text}&rdquo;</Quote>
            <Source>&mdash;{quote.source}</Source>
        </QuoteContainer>
    )
}

export default RandomQuote