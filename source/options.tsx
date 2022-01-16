import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'

window.addEventListener('DOMContentLoaded', () => {
  let el = window.document.getElementById('app')
  ReactDOM.hydrate(<div/>, el)
})
