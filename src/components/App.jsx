import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainArticle from "./MainArticle";
import SideBar from "./SideBar";
import { Switch, Route } from 'react-router-dom';
import RouteTest from "./RouteTest";
import Also from "./Also";
import Art from "./Art";
import NewPostControl from './NewPostControl';
import Admin from './Admin';

function App(){
  var mainDiv = {
    width: 970,
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'white',
    padding: '1em',
  }
  return (
    <div style={mainDiv}>
    <style global jsx>{`
        body {
          margin: 0;
          background-image: url('https://maydesigns.cdn.prismic.io/maydesigns/e618d7ea9a430b4eacb60fbe94a78b867c145cef_page1.png');
          background-repeat: repeat;
          background-size: 260px auto;
          font-family: 'Source Sans Pro', sans-serif;
        }
        h1 a:hover {
          background: #262626;
          color: #ffdb00;
          box-shadow: -10px 0px 0px #262626, 10px 0px 0px #262626;
        }
        h1 a:after {
            position: relative;
            left: 10px;
            line-height: 1.6em;
            background: #ffdb00
          }
          h1 a {
            line-height: 1.6em;
            color: black;
            background: #ffdb00;
            text-decoration: none;
            box-shadow: -10px 0px 0px #ffdb00, 10px 0px 0px #ffdb00;
          }
          a {
            text-decoration: none;
            color: #c33737;
          }
          a:before {
            color: #c33737;
          }
    `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainArticle} />
        <Route path='/RouteTest' component={RouteTest} />
        <Route path='/Art' component={Art} />
        <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />} />
        <Route path='/NewPostControl' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
        <Route path='/admin' render={()=><Admin ticketList={this.state.masterTicketList} />} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
