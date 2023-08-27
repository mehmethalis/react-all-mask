import './index.css'

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { Mask, useReactAllMask } from './react-all-mask'

export const App = () => {
  const [currentMask] = useState(Mask.number)
  const [ref] = useReactAllMask<HTMLInputElement>({ mask: Mask.number })
  return (
    <div className="app">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-3 h-3"
        width="150"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>

      <h1>React All Mask Playground</h1>

      <br />
      <h3>Current Mask : {currentMask}</h3>
      <div className="card">
        <input placeholder="Type..." id="inputEl" ref={ref} />
      </div>
      <p id="val">Value:</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
