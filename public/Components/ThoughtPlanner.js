import React, { useState } from 'react';




import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './Utilities';


export default function ThoughtPlanner () {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts(prev => [thought, ...prev])
  }

  const removeThought = (thoughtIdToRemove) => {
    setThoughts(prev => prev.filter(thought => (thought.id !== thoughtIdToRemove)))
  }

  return (
    <div className="Appi">
     
      <main>
        <AddThoughtForm  addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}
