import React from "react";
import Header from "./Header";
import MainArticle from "./MainArticle";
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainArticle} />
        <Route path='/' component={MainArticle} />
      </Switch>
    </div>
  );
}

export default App;
