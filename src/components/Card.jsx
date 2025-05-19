import { useState } from 'react';
import axios from 'axios';

function Card() {
const [actresses, setActresses] = useState([]);
const [showActresses, setShowActresses] = useState(false);

const fetchActresses = () => {
    if (showActresses) {
        setActresses([]);
        setShowActresses(false);
    } else {
        axios
            .get("https://lanciweb.github.io/demo/api/actresses/")
            .then((response) => {
                setActresses(response.data);
                setShowActresses(true);
            })
            .catch((error) => {
                console.error('ERRORE CARICAMENTO PERSONAGGI', error);
            });
    }
};

const [actors, setActors] = useState([]);
const [showActors, setShowActors] = useState(false);

const fetchActors = () => {
    if (showActors) {
        setActors([]);
        setShowActors(false);
    } else {
        axios
            .get("https://lanciweb.github.io/demo/api/actors/")
            .then((response) => {
                setActors(response.data);
                setShowActors(true);
            })
            .catch((error) => {
                console.error('ERRORE CARICAMENTO PERSONAGGI', error);
            });
    }
};
const [combinedList, setCombinedList] = useState([]);
const [showCombinedList, setShowCombinedList] = useState(false);

const fetchPeople = () => {
    if (showCombinedList) {
        setCombinedList([]);
        setShowCombinedList(false);
    } else {
        axios
            .all([
                axios.get("https://lanciweb.github.io/demo/api/actresses/"),
                axios.get("https://lanciweb.github.io/demo/api/actors/")
            ])
            .then(
                axios.spread((actressesResponse, actorsResponse) => {
                    const combined = [
                        ...actressesResponse.data,
                        ...actorsResponse.data
                    ];
                    setCombinedList(combined);
                    setShowCombinedList(true);
                })
            )
            .catch((error) => {
                console.error('ERRORE CARICAMENTO PERSONAGGI', error);
            });
    }
};



return ( 
    <div className='row'>
        <div className='col'>
            <div className='container'>
                <button onClick={fetchActresses}>Carica Attrici</button>
                <ul className="card">
                    {actresses.map((actress) => {
                        return (
                            <li key={actress.id}>
                                <h2>{actress.name}</h2>
                                <img src={actress.image} alt={actress.name} />
                                <p>{actress.nationality}</p>
                                <p>{actress.mostFamousMovies}</p>
                                <p>{actress.birth_year}</p>
                                <p>{actress.awards}</p>
                                <p>{actress.biography}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        <div className='col'>
            <div className='container'>
                <button onClick={fetchActors}>Carica Attori</button>
                <ul className="card">
                    {actors.map((actor) => {
                        return (
                            <li key={actor.id}>
                                <h2>{actor.name}</h2>
                                <img src={actor.image} alt={actor.name} />
                                <p>{actor.nationality}</p>
                                <p>{actor.knownFor}</p>
                                <p>{actor.birthYear}</p>
                                <p>{actor.awards}</p>
                                <p>{actor.biography}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>  
        <div className='col'>
            <div className='container'>
                <button onClick={fetchPeople}>Lista Combinata</button>
                <ul className="card">
                    {combinedList.map((person) => {
                        return (
                            <li key={person.id}>
                                <h2>{person.name}</h2>
                                <img src={person.image} alt={person.name} />
                                <p>{person.nationality}</p>
                                <p>{person.mostFamousMovies || person.knownFor}</p>
                                <p>{person.birth_year || person.birthYear}</p>
                                <p>{person.awards}</p>
                                <p>{person.biography}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>
);
}

export default Card;