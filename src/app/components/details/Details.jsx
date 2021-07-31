import React, { useState } from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ReactHtmlParser from 'react-html-parser';
import star from '../../../star.svg';
import reverseArrow from '../../../reverse-arrow.svg';
import arrow from '../../../arrow.svg';
import useStyles from './Details.style';

const Details = ({movie}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <div className={classes.readMoreButton} ><span>Read more</span><img src={arrow} alt="arrow" /></div>
      </Button>
      <Dialog
        classes={{ paper: classes.detailsDialog }}
        open={open}>
        <DialogContent>
          <div className={classes.dialogContent}>
            <div><img className={classes.largeThumbnail} src={movie.largeimage} alt={movie.largeimage}/></div>
            <div>
              <div className={classes.title}>{movie.title}</div>
              <div className={classes.duration}>{movie.runtime}</div>
              {movie.rating ? <div className={classes.rating}><img className={classes.ratingStar} src={star} alt="next movie logo" />{movie.rating}</div> : <div className={classes.emptyRating}/>}
              <div className={classes.synopsis}>{ReactHtmlParser (movie.synopsis)}</div>
              <Button className={classes.detailsButton} onClick={handleClose}>
                <div className={classes.readMoreButton}><img src={reverseArrow} alt="reverse arrow" /><span>Back to list</span></div>
              </Button>
            </div>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  );
};


export default Details;

Details.propTypes = {
  movies: PropTypes.object,
};
