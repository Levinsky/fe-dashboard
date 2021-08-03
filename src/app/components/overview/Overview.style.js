import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  layout: {
  },
  header: {
    margin: '0 auto',
    width: '1920px',
    height: '123px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    opacity: '1',
    border: '1px solid #E5E8ED',
    "@media (max-width: 600px)": {
      width: '375px',
      height: '76px',
    }
  },
  nextMovieLogo: {
    marginTop: '23px',
    marginLeft: '143px',
    "@media (max-width: 600px)": {
      width: '158px',
      height: '50px',
      marginTop: '13px',
      marginLeft: '10px',
    }
  },
  movies: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '144px',
    "@media (max-width: 600px)": {
      marginLeft: '40px',
    }
  },
  sreachMovie: {
    width: '500px',
    marginLeft: '144px',
    marginBottom: '10px',
    orderRadius: '8px',
    "@media (max-width: 600px)": {
      width: '300px',
      marginLeft: '40px',
    }
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
    opacity: '1',
    marginBottom: '35px',
    "@media (max-width: 600px)": {
      paddingTop: '35px',
      font: 'normal normal bold 27px/25px Arial',
      width: '322px',
      height: '55px',
      marginBottom: '20px',
    }
  },
  content: {
    margin: '0 auto',
    width: '1920px',
    height: '1708px',
    background: '#00D7FF 0% 0% no-repeat padding-box',
    opacity: '1',
    overflowY: 'scroll',
    "@media (max-width: 600px)": {
      width: '375px',
      height: '2543px',
    }
  },
  footer: {
    margin: '0 auto',
    width: '1920px',
    height: '300px',
    background: '#231F20 0% 0% no-repeat padding-box',
    opacity: '1',
    "@media (max-width: 600px)": {
      width: '375px',
      height: '298px',
    }
  }

}));

export default useStyles