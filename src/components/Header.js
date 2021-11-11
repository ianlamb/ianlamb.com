import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

export const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin-top: ${theme.spacing(5)};
    margin-left: auto;
    margin-right: auto;

    ${(props) =>
        props.compact &&
        `
        flex-direction: row;
        margin-left: 0;
        margin-right: 0;
    `}
`

export const AnchorHitbox = styled.a`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
`

export const Avatar = styled.div`
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    ${(props) => `
    width: ${props.size}px;
    height: ${props.size}px;
  `}

    & > img {
        width: 100%;
        height: 100%;
    }

    ${AnchorHitbox}:hover + & > img:first-child {
        opacity: 0.2;
    }
`

export const AvatarCover = styled.img`
    position: relative;
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease;
`

export const AvatarReveal = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`

export const Title = styled.h1`
    margin: ${theme.spacing(1)};
    font-size: 3rem;
    ${(props) =>
        props.compact &&
        `
    font-size: 2rem;
    margin-left: ${theme.spacing(2)};
  `}
`

export const Description = styled.div`
    font-size: 1rem;
`

const Header = ({ compact = false }) => {
    return (
        <HeaderContainer compact={compact}>
            <AnchorHitbox href="/" />
            <Avatar size={compact ? 64 : 240}>
                <AvatarCover src="/avatar.jpg" alt="avatar" />
                <AvatarReveal src="/avatar2.jpg" alt="avatar" />
            </Avatar>
            <Title compact={compact}>Ian Lamb</Title>
            {!compact && (
                <Description>
                    Software Engineer building things at Improbable
                </Description>
            )}
        </HeaderContainer>
    )
}

export default Header
