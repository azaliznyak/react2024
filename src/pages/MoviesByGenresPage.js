import React, {useEffect, useState} from 'react';

import {MoviesByGenre} from "../components/GenresContainer/MoviesByGenre";
import {useParams} from "react-router-dom";
import { movieService} from "../services";
import css from "../components/MoviesContainer/MoviesList.module.css";

import {usePageQuery} from "../hooks";


const MoviesByGenresPage = () => {


    const [totalPages, setTotalPages] = useState(0);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const { page, nextPage, prevPage } = usePageQuery();


    useEffect(() => {
        const fetchData = async () => {
            const moviesData = await movieService.getByGenre(id, page);
            const totalPagesData = await movieService.getTotalPagesByGenre(id);
            if (moviesData) {
                setMovies(moviesData.results);
            }
            if (totalPagesData) {
                setTotalPages(totalPagesData);
            }
        };
        fetchData();
    }, [id, page]);





    return (
        <div>
            <div className={css.MoviesList}>
                <div className={css.MovieRow}>
            {movies.map(movie => <MoviesByGenre key={movie.id} movie={movie} vote_average={movie.vote_average} />)}

                </div>

            </div>
            <div className={css.MoviesButton}>
                <button disabled={page === 1} onClick={prevPage}>prev</button>
                <div>{page}</div>
                <button disabled={page === totalPages || movies.length===0} onClick={nextPage}>next</button>
            </div>

        </div>
    );
};

export {MoviesByGenresPage};