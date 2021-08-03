import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMovies } from '../../actions/Overview.action';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Logo2 from '../../../Logo2.png';
import Movie from '../movie/Movie';
import Footer from '../footer/Footer'

import useStyles from './Overview.style';

const Overview = ({isLoadingMovies, movies, fetchMovies}) => {
  const [ filteredMovieTitle, setFilteredMovieTitle ] = useState("");
  const filteredMovies = getFilteredMovies(movies, filteredMovieTitle);
  const classes = useStyles();

  function getFilteredMovies (movies, filteredMovieTitle){
    if (filteredMovieTitle === "" ) {
      return movies;
    }
    return movies.filter(movie => movie.title === filteredMovieTitle)
  }

  const onFilterMovie = (title) => {
    setFilteredMovieTitle(title)
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={classes.layout}>
      <div className={classes.header}><img className={classes.nextMovieLogo} src={Logo2} alt="next movie logo" /></div>
      <div className={classes.content}>
        {isLoadingMovies
          ? <div><CircularProgress style={{ margin: 'auto', display: 'flex', marginTop: '400px' }} size={20} /></div>
          : <React.Fragment>
            <div className={classes.pageTitle}>Explore your next Movies and tv shows</div>
            <div className={classes.sreachMovie}>
              <Autocomplete
                freeSolo
                onInputChange={(event, title) => onFilterMovie(title)}
                options={movies}
                getOptionLabel={(option) => option.title}
                renderOption={(option) => (
                  <React.Fragment>
                    {option.title}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Search for your movie" margin="normal" variant="outlined" />
                )}
              />
            </div>
            <div className={classes.movies}>{filteredMovies.map(movie => {
              return (
                <Movie key={movie.id} movie={movie}/>
              )})}
            </div>
          </React.Fragment>
        }
      </div>
      <div className={classes.footer}>
        <Footer/>
      </div>

    </div>
  );

};


const mapStateToProps = state => ({
  isLoadingMovies: state.overview.isLoadingMovies,
  movies: state.overview.movies
});

export default connect(mapStateToProps, { fetchMovies })(Overview);

Overview.propTypes = {
  isLoadingMovies: PropTypes.bool,
  movies: PropTypes.array,
  fetchMovies: PropTypes.func,
};