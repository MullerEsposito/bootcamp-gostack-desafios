import React, { useState, useEffect } from "react";

import api from "./services/api"

import "./styles.css";

function App() {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      "url": "https://github.com/Rocketseat/umbriel",
      "title": `New Item ${Date.now()}`,
      "techs": ["Node", "Express", "TypeScript"]
    })
    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);
    
    if (repositorieIndex >= 0) {
      await api.delete(`repositories/${id}`)
      
      let repositoriesUpdated = [...repositories];
      repositoriesUpdated.splice(repositorieIndex,1);

      setRepositories(repositoriesUpdated);
    }

    
  }

  return (
    <div>
      <ul data-testid="repository-list">
        { 
          repositories.map(repositorie => {
            return (
              <li key={repositorie.id}>
                { repositorie.title }

                <button onClick={() => handleRemoveRepository(repositorie.id)}>
                  Remover
                </button>
              </li>
            )
          }) 
        }
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
