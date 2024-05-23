import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from './constants';

function AddObjectiveForm() {
  const [nome, setNome] = useState('');
  const [valorAlvo, setValorAlvo] = useState(0);
  const [dataAlvo, setDataAlvo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const objetivo = {
      nome,
      valorAlvo,
      dataAlvo,
    };

    axios.post(`${baseUrl}/objectives`, objetivo)
      .then(response => {
        if (response.status === 201) {
          // Update objectives list and clear form
          alert('Objetivo cadastrado com sucesso!');
        } else {
          console.error('Error adding objective:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error adding objective:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Objetivo</h2>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} />

      <label>Valor-Alvo:</label>
      <input type="number" value={valorAlvo} onChange={e => setValorAlvo(e.target.value)} />
      <label>Data-Alvo:</label>
          <input type="date" value={dataAlvo} onChange={e => setDataAlvo(e.target.value)} />

          <button type="submit">Cadastrar</button>
        </form>
      );
    }

    export default AddObjectiveForm;
