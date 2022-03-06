import React from 'react'
import styled from 'styled-components'

export const Root = styled.div(
    ({ theme, compact }) => `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);

    ${
        compact &&
        `
        flex-direction: row;
        margin-left: 0;
        margin-right: 0;
    `
    }
`
)

export const AnchorHitbox = styled.a`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    opacity: 0;
`

export const Avatar = styled.div(
    ({ theme, size }) => `
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    width: ${size}px;
    height: ${size}px;
    transition: all 0.4s ease;
    border: 2px solid ${theme.palette.foreground};

    & > img {
        width: 100%;
        height: 100%;
    }

    ${AnchorHitbox}:hover + & {
        & {
            border-color: ${theme.palette.blue};
        }
        & > img:first-child {
            opacity: 0.35;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
`
)

export const AvatarCover = styled.img`
    position: relative;
    z-index: 2;
    opacity: 0.65;
    transition: all 0.5s ease;
    clip-path: polygon(20% 0, 80% 0, 80% 100%, 20% 100%);
`

export const AvatarReveal = styled.img(
    ({ theme }) => `
    position: absolute;
    opacity: 0.8;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`
)

export const Title = styled.h1(
    ({ theme, compact }) => `
    margin: ${theme.spacing(1)};
    font-size: 3rem;

    ${
        compact &&
        `
    font-size: 2rem;
    margin-left: ${theme.spacing(2)};
    border: none;
  `
    }
`
)

export const Description = styled.div(
    ({ theme }) => `
    font-size: 1.2rem;
    margin-top: ${theme.spacing(1)};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        font-size: 1rem;
    }
`
)

const Header = ({ compact = false }) => {
    return (
        <Root compact={compact}>
            <AnchorHitbox href="/">Ian Lamb</AnchorHitbox>
            <Avatar size={compact ? 64 : 200}>
                <AvatarCover src="/avatar.jpg" alt="avatar" />
                <AvatarReveal src="/avatar2.jpg" alt="avatar" />
            </Avatar>
            <Title compact={compact}>Ian Lamb</Title>
            {!compact && (
                <Description>
                    Software Engineer building things at Improbable
                </Description>
            )}
        </Root>
    )
}

export default Header
