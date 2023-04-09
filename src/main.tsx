import React from 'react'
import ReactDOM from 'react-dom/client'
import { GitExpertApp } from './GitExpertApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GitExpertApp />
  </React.StrictMode>,
)
