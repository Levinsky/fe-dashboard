import React from 'react';
import Logo2 from '../../../Logo2.png';

import useStyles from './Overview.style';

const Overview = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <div className={classes.header}><img className={classes.nextMovieLogo} src={Logo2} alt="Logo2" /></div>
      <div className={classes.content}>
        <div className={classes.pageTitle}>Explore your next Movies and tv shows</div>
      </div>
      <div className={classes.footer}>Footer</div>

    </div>
  );

};


export default Overview;