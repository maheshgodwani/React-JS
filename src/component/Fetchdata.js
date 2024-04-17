import React, { useState } from 'react';

export const Fetchdata = () => {
        
    const [data, setdata] = useState([]);

    async function datahandler() {
        try {
            const response = await fetch('https://swapi.py4e.com/api/films');
            const Data = await response.json();
            setdata(Data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // function datahandler(){
    //     fetch('https://swapi.py4e.com/api/films').then((response)=>{
    //         return response.json();
    //     }).then((data) => {
    //         setdata(data.results);
    //     })
    // }

    return (
        <>
            {data.map((list) => (
                <h1 key={list.episode_id}>{list.title}</h1>
            ))}
            <button onClick={datahandler}>Fetch Data</button>
        </>
    );
};
