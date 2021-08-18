import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const heroes = [
    {
        superhero: 'Batman',
        publisher: 'DC comics',
        alter_ego: 'Bruce Wayne',
        characters: 'Bruce Wayne',
    },
    {
        superhero: 'Wonder Woman',
        publisher: 'DC comics',
        alter_ego: 'Bruce Wayne',
        characters: 'Bruce Wayne',
    },
    {
        superhero: 'Iron Man',
        publisher: 'DC comics',
        alter_ego: 'Bruce Wayne',
        characters: 'Bruce Wayne',
    },
    {
        superhero: 'Spider Man',
        publisher: 'DC comics',
        alter_ego: 'Bruce Wayne',
        characters: 'Bruce Wayne',
    },
    {
        superhero: 'Superman',
        publisher: 'DC comics',
        alter_ego: 'Bruce Wayne',
        characters: 'Bruce Wayne',
    },
];

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

const StyledWrapper = styled.div`
    position: relative;
    margin-top: 2rem;
`;

const StyledTexbox = styled.input`
    height: 4.5rem;
    width: 16rem;
    padding: 0 1.5rem;
    border-radius: 0.75rem;
    border: 0;
    background: #212025;
    color: #f9f9f9;
    transition: all 0.3s;

    &::placeholder {
        color: rgba(255, 255, 255, 0.65);
    }
`;

const StyledIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.96);
    font-size: 22px;
`;

const StyledResults = styled.div`
    postion: absolute;
    top: 4rem;
    left: 0;
    width: 100;
    background: #212025;
    color: #f9f9f9;
`;

function DebounceFeature(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            setSearching(true);
            setResults(
                heroes.filter((o) => o.superhero.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setSearching(false);
        } else {
            setResults([]);
            setSearching(false);
        }
    }, [debouncedSearchTerm]);

    return (
        <StyledWrapper>
            <StyledTexbox
                placeholder="Start Searching"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <StyledIcon className="uil uil-search" />
            <StyledResults>
                {results?.map((item) => (
                    <div>{item.superhero}</div>
                ))}
            </StyledResults>
        </StyledWrapper>
    );
}

export default DebounceFeature;
