import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from './constants';

function SimulateGoalEvolutionForm() {
  const [objectiveNome, setObjectiveNome] = useState('');
  const [aporteMensal, setAporteMensal] = useState(0);
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [prazoMeses, setPrazoMeses] = useState(0);
  const [simulatedResult, setSimulatedResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const simulationData = {
      objectiveNome,
      aporteMensal,
      taxaJuros,
      prazoMeses,
    };

    axios.post(`${baseUrl}/objectives/simulate`, simulationData)
      .then(response => {
        if (response.status === 200) {
          const result = response.data;
          setSimulatedResult(result);
        } else {
            console.error('Error simulating goal evolution:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error simulating goal evolution:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simular Evolução de Objetivo</h2>
      <label>Nome do Objetivo:</label>
      <input type="text" value={objectiveNome} onChange={e => setObjectiveNome(e.target.value)} />

      <label>Aporte Mensal:</label>
      <input type="number" value={aporteMensal} onChange={e => setAporteMensal(e.target.value)} />

      <label>Taxa de Juros (%)</label>
      <input type="number" value={taxaJuros} onChange={e => setTaxaJuros(e.target.value)} />

      <label>Prazo (Meses):</label>
      <input type="number" value={prazoMeses} onChange={e => setPrazoMeses(e.target.value)} />

      <button type="submit">Simular</button>

      {simulatedResult && (
        <div className="simulation-result">
          <h3>Resultado da Simulação</h3>
          <p>Valor Inicial: R$ {simulatedResult.valorInicial}</p>
          <p>Aporte Mensal: R$ {simulatedResult.aporteMensal}</p>
          <p>Taxa de Juros: {simulatedResult.taxaJuros}%</p>
          <p>Prazo: {simulatedResult.prazoMeses} meses</p>
          <p>Valor Final: R$ {simulatedResult.valorFinal}</p>
        </div>
      )}
    </form>
  );
}

export default SimulateGoalEvolutionForm;