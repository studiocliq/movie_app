import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie( {title, summary, year, poster, genres }) {
    return (
        <div className="movie">
            <div className="movie__poster-box">
                <img src={poster} alt={title} title={title} className="movie__poster"/>
            </div>
            <div className="movie__data">
                <h2 className="movie__title">{title}</h2>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, index) => {
                        return <li className="genres__genre" key={index}>{genre}</li>
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0,130)}...</p>
            </div>
            <hr />
            <div className="movie__sns">
                <p>CliQ like this movie</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;