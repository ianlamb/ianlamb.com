import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Root = styled.div(({ theme, compact }) =>
    compact
        ? `
    margin-top: ${theme.spacing(0)};
    margin-bottom: ${theme.spacing(4)};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin-top: ${theme.spacing(2)};
        margin-bottom: ${theme.spacing(2)};
        padding: 0 ${theme.spacing(2)};
    }`
        : `
    margin-top: ${theme.spacing(20)};
    margin-bottom: ${theme.spacing(20)};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin-top: ${theme.spacing(10)};
        margin-bottom: ${theme.spacing(10)};
    }
`
)

export const Wrapper = styled.div(
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

export const AnchorHitbox = styled(Link)`
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

    &:before,
    &:after{
        position: absolute;
        content: "";
        transition: all .25s;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.15);
    }

    &:before{
        width: 10%;
        height: 33%;
        left: -10px;
        bottom: -10px;
    }

    &:after{
        width: 10%;
        height: 33%;
        top: -10px;
        right: -10px;
    }

    ${AnchorHitbox}:hover + & {
        & {
            border-color: ${theme.palette.blue};
        }

        &:before{
            width: 112%;
            height: 140%;
        }
        
        &:after{
            width: 112%;
            height: 140%;
        }
    }
`
)

export const AvatarImage = styled.img``

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

const SocialLinks = styled.div(
    ({ theme }) => `
    text-align: center;
    margin-top: ${theme.spacing(2)};
`
)

const SocialLink = styled.a(
    ({ theme }) => `
    display: inline-block;
    margin: 0 ${theme.spacing(1)};
    font-size: 1.2rem;
`
)

const Header = ({
    title = 'Ian Lamb',
    intro = '',
    socialLinks = [],
    compact = false,
}) => {
    return (
        <Root compact={compact}>
            <Wrapper compact={compact}>
                <AnchorHitbox to="/">{title}</AnchorHitbox>
                <Avatar size={compact ? 64 : 200}>
                    <AvatarImage src="/avatar3.jpg" alt="avatar image" />
                </Avatar>
                <Title compact={compact}>{title}</Title>
                {!compact && <Description>{intro}</Description>}
            </Wrapper>
            {!compact && (
                <SocialLinks>
                    {socialLinks.map((x, i) => (
                        <React.Fragment key={i}>
                            <SocialLink
                                href={x.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {x.label}
                            </SocialLink>
                            {i + 1 < socialLinks.length && <span>&bull;</span>}
                        </React.Fragment>
                    ))}
                </SocialLinks>
            )}
        </Root>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    intro: PropTypes.string,
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string,
        })
    ),
    compact: PropTypes.bool,
}

export default Header
