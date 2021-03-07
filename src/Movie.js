import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie( {title, summary, year, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} class="movie__poster"/>
            <div class="movie__data">
                <h2 class="movie__title">{title}</h2>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;