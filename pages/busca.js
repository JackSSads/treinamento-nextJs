import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Busca() {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if (searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?query=${searchText}`);
            const json = await result.json();

            console.log(json)

            setMovieList(json.list);
            console.log("Pasou!!!")
        };
        console.log("Não pasou!!!")
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Super Filmes</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    <a href="/busca">Busca</a>
                </h1>
                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
                <button onClick={handleSearch}>Buscar</button>
                <hr />
                <ul>
                    {movieList.map(item => (
                        <li>
                            <a href={`/movie/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br />
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};
