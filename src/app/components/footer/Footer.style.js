import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  content: {
    margin: '0 auto',
    width: '250px',
  },
  contactUs: {
    paddingTop: '30px',
    textAlign: 'center',
    font: 'normal normal normal 33px/37px Georgia',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: 1
  },
  support: {
    paddingTop: '10px',
    width: '270px',
    textAlign: 'center',
    font: 'normal normal normal 16px/21px Georgia',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: 1
  },
  nextLogo: {
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'center'
  },
  shareLogos: {
    paddingTop: '40px',
    justifyContent: 'space-between',
    display: 'flex'
  }

}));

export default useStyles