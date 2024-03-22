import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <form id='cadastroForm'>
      <label class="form">Nome:<input name="Nome"/></label>
      <label class="form">CPF:<input name="CPF"/></label>
      <label class="form">Email:<input name="Email"/></label>
      <button class="form" type="Submit">Enviar</button>
    </form>
    </>
  )
}

export default App
