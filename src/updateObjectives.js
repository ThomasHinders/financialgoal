import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from './constants';

function UpdateObjectiveForm(props) {
  const { objectiveId, nome, valorAlvo, dataAlvo } = props;
  const [updatedNome, setUpdatedNome] = useState(nome);
  const [updatedValorAlvo, setUpdatedValorAlvo] = useState(valorAlvo);
  const [updatedDataAlvo, setUpdatedDataAlvo] = useState(dataAlvo);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedObjetivo = {
      nome: updatedNome,
      valorAlvo: updatedValorAlvo,
      dataAlvo: updatedDataAlvo,
    };

    axios.put(`${baseUrl}/objectives/${objectiveId}`, updatedObjetivo)
      .then(response => {
        if (response.status === 200) {
          // Update objectives list and close form
          alert('Objetivo atualizado com sucesso!');
        } else {
          console.error('Error updating objective:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error updating objective:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Atualizar Objetivo</h2>
      <label>Nome:</label>
      <input type="text" value={updatedNome} onChange={e => setUpdatedNome(e.target.value)} />

      <label>Valor-Alvo:</label>
      <input type="number" value={updatedValorAlvo} onChange={e => setUpdatedValorAlvo(e.target.value)} />

      <label>Data-Alvo:</label>
      <input type="date" value={updatedDataAlvo} onChange={e => setUpdatedDataAlvo(e.target.value)} />

      <button type="submit">Atualizar</button>
    </form>
  );
}

export default UpdateObjectiveForm;