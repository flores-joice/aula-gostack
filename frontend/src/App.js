import React, { useEffect, useState } from 'react';
import api from './services/api';
import './App.css';
import Header from './components/Header';

function App() {

    const [projects, setProjects] = useState();

    useEffect(() => {
        api.get('projects')
        
        .then( response => {
            setProjects(response.data)
        })
    })

    function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`])

        api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Joice Flores"
        })

    }
    return (
    <>
    <Header title="Joice"/>

    <ul>
        {
            projects && projects.map(project => 
                <li key={project.id}>
                    {project.title}
                </li>
        )} 
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
)}

export default App;