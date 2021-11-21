

import React from 'react';
import '../header/style.css'
import { version } from '../../../package.json'

export default function Header(){

    return (
        <header className="header__style">
            <img src="https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png" alt="Logo" />
            <p className="header__style--p">Version {version}</p>
        </header>
    )
}