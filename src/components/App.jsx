import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainArticle from "./MainArticle";
import SideBar from "./SideBar";
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainArticle} />
        <Route path='/' component={MainArticle} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
