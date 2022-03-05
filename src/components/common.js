import styled, { css } from 'styled-components'

export const Page = styled.div(
    ({ theme, background = 'none' }) => `
    position: relative;
    overflow: auto;
    height: 100vh;
    color: ${theme.palette.foreground};
    background: ${background};

    overflow-y: scroll;
    perspective: 8px;
    perspective-origin: 0%;
`
)

export const Section = styled.section(
    ({ theme, height, background }) => `
    position: relative;
    width: 100%;
    padding: ${theme.spacing(4)} 0;
    height: ${height || 'auto'};

    background: ${background};

    &:last-of-type {
        padding-bottom: 0;
    }
`
)

export const Container = styled.div(
    ({ maxWidth }) => `
    position: relative;
    max-width: ${maxWidth || 960}px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
`
)

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${({ primary }) =>
        primary &&
        css`
            background: palevioletred;
            color: white;
        `}
`

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ShadowBox = styled.div(
    ({ width, top }) => `
    width: ${width || '100%'};
    top: ${top || '0'};
    position: relative;
    padding: 8px 12px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.5);
`
)

export const Column = styled.div`
    flex-basis: calc(100% * ${({ size }) => parseInt(size, 10) / 12});
`

export const CenterVertically = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const CenterHorizontally = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

// (perspective — distance) / perspective = scaleFactor
// eg. (8 – 3) / 8 = 0.625
export const Parallax = styled.div(
    ({ bg }) => `
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 1440px;
    opacity: 0.7;
    transform-origin: 0%;
    transform: translateZ(-8px) scale(2);
    z-index: -1;
    background-image: url('${bg}');
    background-position: cover;
    background-repeat: no-repeat;
    background-size: 100%;
`
)
