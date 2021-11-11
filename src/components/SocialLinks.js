import React from 'react'
import theme from '../theme'

export default function SocialLinks() {
    return (
        <div style={{ textAlign: 'center', marginTop: theme.spacing(2) }}>
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
        </div>
    )
}
