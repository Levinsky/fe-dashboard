import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  detailsButton: {
    marginTop: '20px',
    marginBottom: '95px',
    width: '260px',
    height: '38px',
    border: '1px solid #000000',
    borderRadius: '100px'
  },
  readMoreButton: {
    width: '240px',
    display: 'flex',
    justifyContent: 'space-between',
    textTransform: 'capitalize',
  },
  largeThumbnail: {
    width: '398px',
    height: '591px',
    marginLeft: '110px',
    marginRight: '139px',
    marginTop: '20px',
    marginBottom: '30px'
  },
  detailsDialog: {
    maxWidth: '1360px'
  },
  dialogContent: {
    display: 'flex'
  },
  title: {
    textAlign: 'left',
    marginTop: '20px',
    marginBottom: '20px',
    font: 'normal normal bold 45px/31px Arial',
    letterSpacing: '0px',
    color: '#000000',
    textTransform: 'uppercase',
    opacity: 1
  },
  duration: {
    marginBottom: '24px',
    textAlign: 'left',
    font: 'normal normal normal 25px/31px Arial',
    letterSpacing: '-0.5px',
    color: '#000000',
    textTransform: 'lowercase',
    opacity: 1
  },
  synopsis: {
    width: '546px',
    marginRight: '143px',
    textAlign: 'left',
    font: 'normal normal normal 30px/31px Georgia',
    letterSpacing: '-0.6px',
    color: '#000000',
    textTransform: 'lowercase',
    opacity: 1
  },
  rating: {
    marginBottom: '30px',
    textAlign: 'left',
    font: 'normal normal normal 25px/21px Arial',
    letterSpacing: '0px',
    color: '#000000',
    textTransform: 'capitalize',
    opacity: 1
  }
}));

export default useStyles