import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import r2wc from "@r2wc/react-to-web-component"

const HelloWC = r2wc(App, {
  props: { name: "string" },
})

customElements.define("hello-wc", HelloWC)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




