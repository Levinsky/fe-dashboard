import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  container: {
    marginRight: '15px',
  },
  thumbnail: {
    width: '260px',
    height: '385px'
  },
  ratingStar: {
    height: '18px',
    marginRight: '5px',
    marginBottom: '-2px'
  },
  emptyRating: {
    height: '18px',
  },
  title: {
    display: 'flex',
    maxWidth: '251px',
    marginTop: '20px',
    height: '90px',
    textAlign: 'left',
    font: 'normal normal normal 30px/31px Georgia',
    letterSpacing: '-0.6px',
    color: '#000000',
    textTransform: 'capitalize',
    opacity: 1
  },
  detailsButton: {
    marginTop: '20px',
    marginBottom: '95px',
    width: '260px',
    height: '38px',
    border: '1px solid #000000',
    borderRadius: '100px'
  }

}));

export default useStyles