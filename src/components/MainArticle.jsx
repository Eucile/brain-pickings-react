import React from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import PostList from './PostList';
import NewPostControl from './NewPostControl';


class MainArticle extends React.Component{
  constructor() {
    super();
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
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
          <MainContent/>
          <NewPostControl
          onNewPostCreation={this.handleAddingNewPostToList}/>
          <PostList
          postList={this.state.masterPostList}/>
        </div>
      </div>
    );
  }
}


export default MainArticle;


// 
// function MainArticle(){
//   var mainArticleStyle = {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "970",
//     marginBottom: '4em',
//     marginTop: '2em',
//   };
//   return (
//     <div style={mainArticleStyle}>
//       <SideBar/>
//       <MainContent/>
//     </div>
//   );
// }
// export default MainArticle;
