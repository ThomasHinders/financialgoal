import React from 'react';
import axios from 'axios';
import { baseUrl } from './constants';

function DeleteObjectiveButton(props) {
  const { objectiveId } = props;

  const handleDelete = () => {
    axios.delete(`${baseUrl}/objectives/${objectiveId}`)
      .then(response => {
        if (response.status === 204) {
          // Remove objective from list
          alert('Objetivo removido com sucesso!');
        } else {
          console.error('Error removing objective:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error removing objective:', error);
      });
  };

  return (
    <button onClick={handleDelete}>Remover</button>
  );
}

export default DeleteObjectiveButton;