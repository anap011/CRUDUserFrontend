import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7075/api/Usuario')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Bienvenid@
                </h1>
            </header>
            <main className='App-content'>
                <section className='App-section'>
                    <p> Esta página web que he desarrollado utilizando React se conecta a una API-REST que está vinculada a una base de datos SQL Server. Dicha API-REST utiliza método CRUD GET, desarrollada en C# .NET . Con ella, los usuarios podrán visualizar información sobre otros usuarios, como su identificación de usuario (ID) y su nombre.
                    </p>
                </section>
                <body className='App-body'>
                    {data.map((item, index) => (
                        <div key={index} className="card">
                            <p>Usuario ID: {item.id}</p>
                            <p>Usuario Nombre: {item.name.trim()}</p>
                        </div>
                    ))}
                </body>
            </main>
        </div>
    );
}

export default App;
