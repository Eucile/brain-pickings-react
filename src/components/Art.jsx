import React from "react";

function Art(){
  var artStyles = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  var imgStyles = {
    width: 130,
    padding: '1em',
    margin: '2em',
    boxShadow: '0px -5px 10px rgba(0, 0, 0, .5)',
  }
  return (
    <div style={artStyles}>
      <img style={imgStyles} src="https://66.media.tumblr.com/de4845297cdb9e6d173249c52bfca36c/tumblr_nty71aAmJS1rlvrwdo1_400.jpg"/>
      <img style={imgStyles} src="https://66.media.tumblr.com/16eccc0ea1abd7692251780632923345/tumblr_n7rjlr8wAA1rlvrwdo1_400.jpg"/>
      <img style={imgStyles} src="https://66.media.tumblr.com/7b67a7822ed68dbc022fecadbfec3e60/tumblr_n7dbm2cnLB1rlvrwdo1_400.jpg"/>
      <img style={imgStyles}  src="https://66.media.tumblr.com/9d7161322fbffefeef69480f1d9c7978/tumblr_n4r5glXKfX1rlvrwdo1_400.jpg"/>
      <img style={imgStyles} src="https://66.media.tumblr.com/ba40c41eac848d30f3cce38441992e91/tumblr_n4r5dwNgCg1rlvrwdo1_400.jpg"/>
      <img style={imgStyles} src="https://66.media.tumblr.com/daa4eff62f0c64a1a711893102c66d4d/tumblr_n4r5ctdFbC1rlvrwdo1_400.jpg"/>
      <img style={imgStyles} src="https://66.media.tumblr.com/89280991cbc0ac78a247e801cf63b9af/tumblr_n4r5fc1Xe21rlvrwdo1_400.jpg"/>
      <img style={imgStyles} src="https://66.media.tumblr.com/39436752cc6507b9ec06e6269648e8ea/tumblr_n4r5beRPS51rlvrwdo1_400.jpg"/>
    </div>
  );
}

export default Art;