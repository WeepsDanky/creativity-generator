'use client';

import { useState, useEffect } from 'react';

function getRandomPairs(vocabulary: any) {
    const shuffled = [...vocabulary].sort(() => 0.5 - Math.random());
    return Array.from({ length: 10 }, (_, i) => [shuffled[i * 2], shuffled[i * 2 + 1]]);
}

const WordPairs = () => {
    const [wordPairs, setWordPairs] = useState<string[][]>([]);
    const [vocabulary, setVocabulary] = useState<string[]>([]);

    useEffect(() => {
        const loadVocabulary = async () => {
            const response = await fetch('/vocabulary.json');
            const data = await response.json();
            setVocabulary(data.words);
        };

        loadVocabulary();
    }, []);

    useEffect(() => {
        if (vocabulary.length > 0) {
            handleGenerate();
        }
    }, [vocabulary]);

    const handleGenerate = () => {
        setWordPairs(getRandomPairs(vocabulary));
    };

    return (
        <div className="flex flex-col items-center">
            <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={handleGenerate}
            >
                Generate
            </button>
            <div className="flex space-x-4">
                <div className="bg-gray-800 p-4 rounded shadow-md w-1/2">
                    <h2 className="text-xl font-bold mb-2">Window 1</h2>
                    <ul>
                        {wordPairs.map((pair, index) => (
                            <li key={index} className="mb-1">{pair[0]}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded shadow-md w-1/2">
                    <h2 className="text-xl font-bold mb-2">Window 2</h2>
                    <ul>
                        {wordPairs.map((pair, index) => (
                            <li key={index} className="mb-1">{pair[1]}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WordPairs;