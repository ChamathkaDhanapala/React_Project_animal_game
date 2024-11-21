import React, { useState } from 'react';
import { animals } from '../AnimalsDb';

const AnimalGame = () => {
    const [randomAnimal, setRandomAnimal] = useState(animals[Math.floor(Math.random() * animals.length)]);
    const [result, setResult] = useState('');
    const [view, setView] = useState('grid');

    const handleChoice = (selectedAnimalName) => {
        if (selectedAnimalName === randomAnimal.name) {
            setResult('Win');
        } else {
            setResult('Lose');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <table border={'1'}>
                <tr>
                    <td colSpan={'3'}>
                        <h1>Animal Matching Game</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                            <h3>Result: {result}</h3>
                    </td>
                    <td>
                    <h3>Animal Name: {randomAnimal.name}</h3>
                    </td>
                    <td>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '20px' }}>
                            {animals.map((animal, index) => (
                                <img
                                    key={index}
                                    src={`/assests/images/${animal.img}`}
                                    alt={animal.name}
                                    style={{ width: '100px', height: '100px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '8px' }}
                                    onClick={() => handleChoice(animal.name)}
                                />
                            ))}
                        </div>
                    </td>
                    </tr>
                
                





            </table>
        </div>
    );
};


export default AnimalGame;
