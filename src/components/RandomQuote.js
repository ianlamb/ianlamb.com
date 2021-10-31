import React, { useState } from "react"
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
    },
    {
        text: "Life is really simple, but we insist on making it complicated.",
        source: "Confucius"
    },
    {
        text: "If you don’t like something, change it. If you can’t change it, change the way you think about it.",
        source: "Mary Engelbreit"
    },
    {
        text: "I hear and I forget. I see and I remember. I do and I understand.",
        source: "Confucius"
    },
    {
        text: "What stands in the way becomes the way.",
        source: "Marcus Aurelius"
    },
    {
        text: "Between stimulus and response, there is a space. In that space is our power to choose our response.",
        source: "Viktor Frankl"
    },
    // {
    //     text: "",
    //     source: ""
    // }
]

const getRandomQuote = () => quotes[Math.round(Math.random() * (quotes.length - 1))]

const QuoteContainer = styled.div`
    position: relative;
    max-width: 600px;
    margin: ${theme.spacing(6)} auto;
    padding: ${theme.spacing(2)};
    cursor: pointer;

    &:before {
        position: absolute;
        display: block;
        content: '';
        width: ${theme.quoteDecorationSize}px;
        left: calc(50% - ${theme.quoteDecorationSize/2}px);
        top: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }
    &:after {
        position: absolute;
        display: block;
        content: '';
        width: ${theme.quoteDecorationSize}px;
        left: calc(50% - ${theme.quoteDecorationSize/2}px);
        top: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
`

const Quote = styled.div`
    font-size: 1.5rem;
    font-style: italic;
`
const Source = styled.div`
    font-size: 1rem;
    color: ${theme.palette.text.muted};
`

const RandomQuote = () => {
    const [quote, setQuote] = useState(getRandomQuote())

    const onClick = () => setQuote(getRandomQuote())

    return (
        <QuoteContainer onClick={onClick}>
            <Quote>&ldquo;{quote.text}&rdquo;</Quote>
            <Source>&mdash;{quote.source}</Source>
        </QuoteContainer>
    )
}

export default RandomQuote