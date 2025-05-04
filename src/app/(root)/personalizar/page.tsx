"use client"
import React, { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NovoCliente() {
  const [nome, setNome] = useState('')
  const [campos, setCampos] = useState([{ chave: '', valor: '' }])

  const adicionarCampo = () => {
    setCampos([...campos, { chave: '', valor: '' }])
  }

interface Campo {
    chave: string;
    valor: string;
}

const handleCampoChange = (index: number, field: keyof Campo, value: string): void => {
    const novosCampos: Campo[] = [...campos];
    novosCampos[index][field] = value;
    setCampos(novosCampos);
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const campos_personalizados: Record<string, string> = {}
    campos.forEach((c: Campo) => {
        if (c.chave) campos_personalizados[c.chave] = c.valor
    })

    await fetch('http://localhost:8000/registrar_empresa1/personalizar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, campos_personalizados }),
    })

    alert('Cliente criado!')
}

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <h3>Campos Personalizados:</h3>
      {campos.map((campo, index) => (
        <div key={index}>
          <input
            placeholder="Chave"
            value={campo.chave}
            onChange={(e) => handleCampoChange(index, 'chave', e.target.value)}
          />
          <input
            placeholder="Valor"
            value={campo.valor}
            onChange={(e) => handleCampoChange(index, 'valor', e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={adicionarCampo}>+ Adicionar Campo</button>
      <button type="submit">Salvar</button>
    </form>
  )
}
