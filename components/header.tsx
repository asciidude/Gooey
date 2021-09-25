import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
        <div>
            <img width="135px" src="https://cdn.glitch.com/d9ce7ec4-d848-4049-a5a1-ffc783a82f92%2FGooey-ico.png?v=1630992726855" />
            <div className="subtitle">
                {/* Home Link */}

                <a target="_top" href="/">
                    <i className="fa fa-home"></i> Home
                </a>

            
                <span className="space-r"></span>


                {/* Login Link */}

                <a target="_top" href="/login">
                    <i className="fa fa-sign-in"></i> Login
                </a>
            </div>
        </div>
    )
}
