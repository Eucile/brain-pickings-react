import React from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import PostList from './PostList';
import NewPostControl from './NewPostControl';
import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import RouteTest from "./RouteTest";
import Admin from './Admin';

class MainArticle extends React.Component{
  constructor() {
    super();
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePostElapsedWaitTime(),
      5000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  updatePostElapsedWaitTime() {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach((post) =>
      post.formattedWaitTime = (post.timeOpen).fromNow(true)
    );
    this.setState({masterPostList: newMasterPostList});
  }
  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newPost.formattedWaitTime = (newPost.timeOpen).fromNow(true)
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    var mainArticleStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "970",
      marginBottom: '4em',
      marginTop: '2em',
    };
    return (
      <div>
        <div style={mainArticleStyle}>
          <SideBar/>
          <div>
          <MainContent/>
        <Switch>
          <Route exact path='/' render={()=><PostList postList={this.state.masterPostList} />} />
          <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToList} />} />
          <Route path='/admin' render={()=><Admin postList={this.state.masterPostList} />} />
        </Switch>
          <PostList
          postList={this.state.masterPostList}/>
          <NewPostControl
          onNewPostCreation={this.handleAddingNewPostToList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainArticle;

