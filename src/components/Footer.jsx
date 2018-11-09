import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
  var FooterStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    justifyContent: "space-around",
    width: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1em',
    fontSize: '1em',
    borderTop: '1px solid #d9d9d9',
  };
  var pStyles = {
    color: '#8c8c8c',
    padding: '.5em',
  }
  return (
    <div style={FooterStyles}>  
      <p style={pStyles}>Brain Pickings participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn commissions by linking to Amazon. In more human terms, this means that whenever you buy a book on Amazon from a link on here, I get a small percentage of its price. That helps support Brain Pickings by offsetting a fraction of what it takes to maintain the site, and is very much appreciated.</p>
    </div>
  );
}

export default Footer;
