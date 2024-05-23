import {React, useState} from 'react';
import ObjectivesList from './fetchObjectives';
import AddObjectiveForm from './addObjectives';
import UpdateObjectiveForm from './updateObjectives';
import DeleteObjectiveButton from './deleteObjectives';
import SimulateGoalEvolutionForm from './simulateGoal';
import './App.css';

function App() {
  const [objectives, setObjectives] = useState([]);
  const [selectedObjective, setSelectedObjective] = useState(null);

  const handleObjectiveUpdate = (updatedObjective) => {
    const updatedObjectives = objectives.map(obj => {
      if (obj.id === updatedObjective.id) {
        return updatedObjective;
      }
      return obj;
    });
    setObjectives(updatedObjectives);
  };

  const handleObjectiveDelete = (objectiveId) => {
    const filteredObjectives = objectives.filter(obj => obj.id !== objectiveId);
    setObjectives(filteredObjectives);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Metas Financeiras</h1>

      <ObjectivesList objectives={objectives} />

      <AddObjectiveForm
        objectives={objectives}
        setObjectives={setObjectives}
      />

      {selectedObjective && (
        <div>
          <h2>Editar Objetivo</h2>
          <UpdateObjectiveForm
            objective={selectedObjective}
            handleObjectiveUpdate={handleObjectiveUpdate}
            setSelectedObjective={setSelectedObjective}
          />

          <DeleteObjectiveButton
            objectiveId={selectedObjective.id}
            handleObjectiveDelete={handleObjectiveDelete}
          />
        </div>
      )}

      <SimulateGoalEvolutionForm />
    </div>
  );
}

export default App;
