import React, {useState} from 'react';
import {MovieSearch} from "../components/MoviesContainer/MovieSearch";
import {searchService} from "../services/searchService";
import css from "../components/MoviesContainer/MoviesList.module.css";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";


const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {page}=useSearchParams();
    const {reset}=useForm({mode:'all'})

    const handleSearch = async () => {
        const data = await searchService.searchMovies(query, currentPage);
        if (data) {
            setResults(data.results);

        }


    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        reset()
    };

    const handleNextPage = async () => {
        setCurrentPage(currentPage + 1);
        await handleSearch();
    };

    const handlePrevPage = async () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            await handleSearch();
        }
    };
    return (
        <div className={css.SearchPage}>
            <div className={css.form} >
            <input className={css.input} type="text" placeholder={'Search film'} value={query} onChange={handleInputChange} />
            <button className={css.button} onClick={handleSearch}>Search</button>

            </div>

            <div >
            <MovieSearch results={results} />

            </div>






            <div className={css.MoviesButton}>
            <button onClick={handlePrevPage}>Prev</button>
                <div>{page}</div>
            <button onClick={handleNextPage}>Next</button>

            </div>

        </div>
    );
};

export {SearchPage};