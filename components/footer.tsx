import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Footer({}: Props): ReactElement {
    return (
        <footer className="footer">
        <div className="center">
            {/* Support Link */}

            <a target="_top" href="https://discord.gg/HcvP5sdmYH">
                <i className="fa fa-question"></i> Support Server
            </a>

            <span className="space-r"></span>

            {/* Remix Link */}

            <a target="_top" href="https://github.com/asciidude/Gooey">
                <i className="fa fa-code"></i> GitHub
            </a>

            <br />

            {/* Copywright */}
            <p className="light">
                &copy; Gooey Chat Services
            </p>
        </div>
    </footer>
    )
}
