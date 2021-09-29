import React, { ReactElement } from 'react'
import Link from 'next/link'

interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
        <div>
            <img width={135} alt="Gooey Logo" src="https://cdn.glitch.com/d9ce7ec4-d848-4049-a5a1-ffc783a82f92%2FGooey-ico.png?v=1630992726855" />
            <div className="subtitle">
                {/* Home Link */}

                <Link href="/">
                    <a>
                        <i className="fa fa-home"></i> Home
                    </a>
                </Link>

            
                <span className="space-r"></span>


                {/* Login Link */}

                <Link href="/login">
                    <a>
                        <i className="fa fa-sign-in"></i> Login
                    </a>
                </Link>
            </div>
        </div>
    )
}
