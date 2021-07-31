import React from 'react';
import PropTypes from "prop-types";
import star from '../../../star.svg';
import Details from '../details/Details'
import useStyles from './Movie.style';

const Movie = ({movie}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div><img className={classes.thumbnail} src={movie.image} alt={movie.image}/></div>
      <div className={classes.title}>{`${movie.title} (${movie.released})`}</div>
      {movie.rating ? <div><img className={classes.ratingStar} src={star} alt="next movie logo" />{movie.rating}</div> : <div className={classes.emptyRating}/>}
      <div className={classes.detailsButton}><Details movie={movie}/></div>
    </div>
  );

};

export default Movie;

Movie.propTypes = {
  movies: PropTypes.object,
};