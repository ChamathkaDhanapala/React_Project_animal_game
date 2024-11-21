import React, { useState } from 'react';
import { animals } from '../AnimalsDb';

const AnimalGame = () => {
    const [randomAnimal, setRandomAnimal] = useState(animals[Math.floor(Math.random() * animals.length)]);
    const [result, setResult] = useState('');

    const handleChoice = (selectedAnimalName) => {
        if (selectedAnimalName === randomAnimal.name) {
            setResult('Win');
        } else {
            setResult('Lose');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Animal Matching Game</h1>
            <h2>Find: {randomAnimal.name}</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '20px' }}>
                {animals.map((animal, index) => (
                    <img
                        key={index}
                        src={`path-to-images/${animal.img}`} // Replace with the correct path
                        alt={animal.name}
                        style={{ width: '100px', cursor: 'pointer' }}
                        onClick={() => handleChoice(animal.name)}
                    />
                ))}
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>Result: {result}</h3>
            </div>
        </div>
    );
};

export default AnimalGame;
