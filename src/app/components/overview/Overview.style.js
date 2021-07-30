import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  layout: {

  },
  header: {
    margin: '0 auto',
    width: '1920px',
    height: '123px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    opacity: '1',
    border: '1px solid #E5E8ED',
  },
  nextMovieLogo: {
    marginTop: '23px',
    marginLeft: '143px',
  },
  pageTitle: {
    paddingTop: '114px',
    margin: '0 auto',
    width: '953px',
    textAlign: 'center',
    font: 'normal normal bold 80px/66px Arial',
    letterSpacing: '0px',
    color: '#000000',
    textTransform: 'uppercase',
    opacity: '1'
  },
  content: {
    margin: '0 auto',
    width: '1920px',
    height: '1708px',
    background: '#00D7FF 0% 0% no-repeat padding-box',
    opacity: '1'
  },
  footer: {
    margin: '0 auto',
    width: '1920px',
    height: '300px',
    background: '#231F20 0% 0% no-repeat padding-box',
    opacity: '1'
  }

}));

export default useStyles