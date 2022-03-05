import React from 'react'
import styled from 'styled-components'
import { shuffle } from 'lodash-es'

const quotes = [
    {
        text: 'Instead of cursing the darkness, light a candle.',
        source: 'Benjamin Franklin',
    },
    {
        text:
            'Wealth consists not in having great possessions, but in having few wants.',
        source: 'Epictetus',
    },
    {
        text: 'Life is really simple, but we insist on making it complicated.',
        source: 'Confucius',
    },
    {
        text:
            'If you don’t like something, change it. If you can’t change it, change the way you think about it.',
        source: 'Mary Engelbreit',
    },
    {
        text:
            'I hear and I forget. I see and I remember. I do and I understand.',
        source: 'Confucius',
    },
    {
        text: 'What stands in the way becomes the way.',
        source: 'Marcus Aurelius',
    },
    {
        text:
            'Between stimulus and response, there is a space. In that space is our power to choose our response.',
        source: 'Viktor Frankl',
    },
]

const Quote = styled.div(
    ({ theme }) => `
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
    background: ${theme.palette.magicGradient};
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.25s;
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
`
)

const Source = styled.div(
    ({ theme }) => `
    font-size: 1rem;
    color: ${theme.palette.text.muted};
`
)

const RandomQuote = () => {
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
            <Quote>&ldquo;{quote.text}&rdquo;</Quote>
            <Source>&mdash;{quote.source}</Source>
        </QuoteContainer>
    )
}

export default RandomQuote
