'use client'

import React, { useState } from 'react'
import { WriteEdge } from '../_actions/write'

export const Form = () => {
  const [inputValue, setInputValue] = useState<string>('') // Controla o estado do input

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault() // Evita o comportamento padrão do submit
    console.log('Dados enviados:', inputValue) // Exibe o valor do input
    // Aqui você pode fazer algo com os dados, como enviar para uma API
    const response = await WriteEdge()
    console.log('response :', response)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          value={inputValue} // Liga o valor do input ao state
          onChange={(e) => setInputValue(e.target.value)} // Atualiza o state ao digitar
          className='h-10 rounded mb-3 text-black px-2'
        />
      </div>
      <button
        type='submit'
        className='bg-green-700 text-white rounded py-1 px-3'
      >
        Enviar
      </button>
    </form>
  )
}
