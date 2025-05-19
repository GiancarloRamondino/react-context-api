import { useParams } from "react-router-dom";   
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SinglePers() {
    const { id } = useParams();
    const [personaggio, setPersonaggio] = useState([]);

    const getSinglePers = ()  =>{
        axios
           .get(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => {
            setPersonaggio(response.data);
        });
    }; 

    useEffect(() => {
        getSinglePers();
    }, [id]);

    const navigate = useNavigate();

    const handlePrev = () => {
        const prevId = parseInt(id, 10) - 1;
        if (prevId > 0) {
            navigate(`/personaggi/${prevId}`);
        }
    };

    const handleNext = () => {
        const nextId = parseInt(id, 10) + 1;
        navigate(`/personaggi/${nextId}`);
    };

    return (
        <div>
            <h1>{personaggio.name}</h1>
            <img src={personaggio.image} alt={personaggio.name} />
            <div>
                <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default SinglePers;