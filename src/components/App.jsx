import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainArticle from "./MainArticle";
import SideBar from "./SideBar";
import { Switch, Route } from 'react-router-dom';
import RouteTest from "./RouteTest";

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainArticle} />
        <Route path='/RouteTest' component={RouteTest} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
