import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// JSX = JavaScrip + XML (HTML).
//dom -  Document Object Model - Representação do HMTL através do JS.
//Componentes são arquivos que contem toda informação disponivel ao usuario e pode ser usada mais de uma vez.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
