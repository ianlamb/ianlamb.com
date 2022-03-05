import React from 'react'
import styled from 'styled-components'

const Root = styled.div(({ theme }) => ({
    textAlign: 'center',
    marginTop: theme.spacing(2),
}))

export default function SocialLinks() {
    return (
        <Root>
            <a
                href="https://www.instagram.com/ianlamb32/"
                target="_blank"
                rel="noreferrer"
            >
                Instagram
            </a>{' '}
            &bull;{' '}
            <a
                href="https://github.com/ianlamb"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </a>
        </Root>
    )
}
