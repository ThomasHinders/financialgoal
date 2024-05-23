import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from './constants';

function ObjectivesList() {
  const [objectives, setObjectives] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/objectives`)
      .then(response => {
        if (response.status === 200) {
          setObjectives(response.data);
        } else {
          console.error('Error fetching objectives:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error fetching objectives:', error);
      });
  }, []);

  return (
    <div>
      <h2>Objetivos</h2>
      <ul>
        {objectives.map(objective => (
          <li key={objective.id}>
            {objective.nome} - R$ {objective.valorAlvo} (Data Alvo: {objective.dataAlvo})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ObjectivesList;
