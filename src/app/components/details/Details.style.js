import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  detailsButton: {
    marginTop: '237px',
    width: '260px',
    height: '38px',
    border: '1px solid #000000',
    borderRadius: '100px',
    "@media (max-width: 600px)": {
      marginTop: '25px',
      marginBottom: '15px',
      width: '245px'
    }
  },
  readMoreButton: {
    width: '240px',
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
    "@media (max-width: 600px)": {
      width: '125px',
      marginTop: '-4px'
    }
  },
  ratingStar: {
    marginRight: '10px',
    marginBottom: '-2px'
  },
  largeThumbnail: {
    width: '398px',
    height: '591px',
    marginLeft: '110px',
    marginRight: '139px',
    marginTop: '20px',
    marginBottom: '30px',
    "@media (max-width: 600px)": {
      width: '245px',
      height: '380px',
      marginLeft: '0px',
      marginRight: '0px',
      marginBottom: '5px',
      marginTop: '0px',
    }
  },
  detailsDialog: {
    maxWidth: '1360px',
    "@media (max-width: 600px)": {
      maxWidth: '294px',
    }
  },
  dialogContent: {
    display: 'flex',
    "@media (max-width: 600px)": {
      flexDirection: 'column',
    }
  },
  title: {
    textAlign: 'left',
    marginTop: '20px',
    marginBottom: '20px',
    font: 'normal normal bold 45px/31px Arial',
    letterSpacing: '0px',
    color: '#000000',
    textTransform: 'uppercase',
    opacity: 1,
    "@media (max-width: 600px)": {
      font: 'normal normal bold 30px/31px Arial',
      width: '250px',
      height: '33px',
      marginTop: '0px',
      marginBottom: '40px',
    }
  },
  duration: {
    marginBottom: '24px',
    textAlign: 'left',
    font: 'normal normal normal 25px/31px Arial',
    letterSpacing: '-0.5px',
    color: '#000000',
    textTransform: 'lowercase',
    opacity: 1,
    "@media (max-width: 600px)": {
      marginBottom: '10px',
    }
  },
  synopsis: {
    width: '546px',
    marginRight: '143px',
    textAlign: 'left',
    font: 'normal normal normal 30px/31px Georgia',
    letterSpacing: '-0.6px',
    color: '#000000',
    textTransform: 'lowercase',
    opacity: 1,
    "@media (max-width: 600px)": {
      width: '250px',
      font: 'normal normal normal 20px/20px Georgia',
      letterSpacing: '-0.32px'
    }
  },
  rating: {
    marginBottom: '30px',
    textAlign: 'left',
    font: 'normal normal normal 25px/21px Arial',
    letterSpacing: '0px',
    color: '#000000',
    textTransform: 'capitalize',
    opacity: 1,
    "@media (max-width: 600px)": {
      marginBottom: '25px',
    }
  }
}));

export default useStyles