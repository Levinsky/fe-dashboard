import React from 'react';
import favicon from '../../../favicon.svg';
import facebook from '../../../facebook-share-icon.svg';
import instagram from '../../../instagram-share-icon.svg';
import linkedin from '../../../linkedin-share-icon.svg';
import twitter from '../../../twitter-share-icon.svg';
import youtube from '../../../youtube-share-icon.svg';
import useStyles from './Footer.style';


const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div>
        <div className={classes.nextLogo}><img src={favicon} alt="favicon" /></div>
        <div className={classes.contactUs}>Contact us</div>
        <div className={classes.support}>support@nextmovies.com Mon – Fri | 6:00am – 5:00 pm PT</div>
        <div className={classes.shareLogos}>
          <img src={facebook} alt="favicon" />
          <img src={linkedin} alt="favicon" />
          <img src={twitter} alt="favicon" />
          <img src={instagram} alt="favicon" />
          <img src={youtube} alt="favicon" />
        </div>
      </div>
    </div>
  );

};

export default Footer;
