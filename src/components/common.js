import styled, { css } from "styled-components"

export const Page = styled.div`
  position: relative;
  overflow: auto;
  min-height: 100vh;
`

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 400px;
  height: ${props => props.height || "auto"};
`

export const Container = styled.div`
  position: absolute;
  max-width: 960px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`

export const Avatar = styled.img`
  
`

export const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('${props => props.src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ShadowBox = styled.div`
  width: ${props => props.width || "100%"};
  top: ${props => props.top || "0"};
  position: relative;
  padding: 8px 12px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
`

export const Column = styled.div`
  flex-basis: calc(100% * ${props => parseInt(props.size, 10) / 12});
`

export const CenterVertically = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
