import React, { useState } from 'react';
import { animals } from '../AnimalsDb';

const AnimalGame = () => {
    const [randomAnimal] = useState(animals[Math.floor(Math.random() * animals.length)]);
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
            <table border={'1'}>
                <tr>
                    <th colSpan={'3'}>
                        <h1>ANIMAL MATCHING GAME</h1>
                    </th>
                </tr>
                <tr>
                    <td className='wide-cell'>
                        <span style={{ color: 'black', fontWeight: 'bold' }}>Result:</span>{' '}
                        <span className={result === 'Win' ? 'result-win' : 'result-lose'}>
                            {result}
                        </span>
                    </td>
                    <td>
                        <h3>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>Animal Name:</span>{' '}
                            <span style={{ color: 'orange', fontWeight: 'bold' }}>{randomAnimal.name}</span>
                        </h3>

                    </td>
                    <tr>
                        <td><h3>Select the Animal</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '0px', backgroundColor: 'lightblue', borderTop: '10px', }}>
                                {animals.map((animal, index) => (
                                    <img
                                        key={index}
                                        src={`/assests/images/${animal.img}`}
                                        alt={animal.name}
                                        style={{ width: '100px', height: '100px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '8px', }}
                                        onClick={() => handleChoice(animal.name)}
                                    />
                                ))}
                            </div>
                        </td>
                    </tr>
                </tr>
            </table>
        </div>
    );
};


export default AnimalGame;
