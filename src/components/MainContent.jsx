import React from "react";

function MainContent(){
  var mainContentStyles = {
    padding: '0 2em',
    marginLeft: '1em',
  }
  var titleStyles = {
    margin: 0,
    fontFamily: "'Fira Sans', sans-serif",
  }
  var quoteStyles = {
    borderBottom: '1px solid #d9d9d9',
    padding: '0 1.5em 1em',
    fontSize: '1.25em',
    lineHeight: '1.4em',
  }
  var authorStyles = {
    color: '#b3b3b3',
  };
  return (
    <div style={mainContentStyles}>
        <h1 style={titleStyles}><a href="">A Brave and Startling Truth: Astrophysicist Janna Levin Reads Maya Angelou’s Stunning Humanist Poem That Flew to Space, Inspired by Carl Sagan</a></h1>
        <h2 style={quoteStyles}>“Out of such chaos, of such contradiction / We learn that we are neither devils nor divines…”</h2>
        <p style={authorStyles}>BY MARIA POPOVA</p>      
    </div>  
  );
}

export default MainContent;
