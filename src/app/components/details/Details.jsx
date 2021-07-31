import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ReactHtmlParser from 'react-html-parser';
import star from '../../../star.svg';
import reverseArrow from '../../../reverse-arrow.svg';
import arrow from '../../../arrow.svg';
import useStyles from './Details.style';

const movie =[
  {"id":"60027713","title":"2 Fast 2 Furious","image":"https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcPADEjySdmCNxJrnX6owPs92K-0NGAtcYnmtpNLqNsQTXglXWyTSo9MDTxUKFAYoEILjhAM0gNbxzanxRGjCoCc5g.jpg?r=ae6","synopsis":"It&#39;s a major double-cross when former cop Brian teams up with his ex-con buddy to transport a shipment of &#39;dirty&#39; money for a shady importer-exporter.<br><b>New on 2020-06-18</b>","rating":"5.9","type":"movie","released":"2003","runtime":"1h47m","largeimage":"https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXWi8cWleYPwFmSJYzCdu4b8EalVrXaprZQvOgoA41Oau4m0IxZ8gEipVc0tNUxtdMaDT2zDMvNfJAeQU-MeXs3ky2l3.jpg?r=ae6","unogsdate":"2020-06-18","imdbid":"tt0322259","download":"1"}]

const Details = () => {
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
            <div><img className={classes.largeThumbnail} src={movie[0].largeimage} alt={movie[0].largeimage}/></div>
            <div>
              <div className={classes.title}>{movie[0].title}</div>
              <div className={classes.duration}>{movie[0].runtime}</div>
              {movie[0].rating ? <div className={classes.rating}><img className={classes.ratingStar} src={star} alt="next movie logo" />{movie[0].rating}</div> : <div className={classes.emptyRating}/>}
              <div className={classes.synopsis}>{ReactHtmlParser (movie[0].synopsis)}</div>
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
