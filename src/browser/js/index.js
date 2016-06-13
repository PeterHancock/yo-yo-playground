const yo = require('yo-yo')
const csjs = require('csjs')

const style = csjs`
    .hi {
        color: red;
    }
`
const msg = 'Yo yo-yo'

const el = yo`
    <h1 class="${style.hi}">${msg}</h1>
`

document.body.appendChild(el)
