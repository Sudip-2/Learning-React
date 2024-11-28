import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const createElement = (
    <a href="https://google.com">Click here to visit Google</a>
)

let reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Visit Google"
}

let realReactEle = React.createElement('a',{href:'https://google.com', target:'_blank'}, 'Go to Google')

createRoot(document.getElementById('root')).render(
    // realReactEle
    App()
)
