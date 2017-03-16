import React from "react";
import Post from "./Post";
import * as api from "../dataApi";
import PostContent from "./PostContent";

class Discussions extends React.Component{
     state ={
        currentContent: this.props.content[0],
        selectedPost:this.props.content[0].posts[0]
    }

handlePostClick(){
    debugger;
    var postID = this.event.target.key;
    if (postID !== null){
        for(x in this.currentContent.posts){
            if (x.id === postID)
            {
                this.setState({
                     currentContent:this.state.currentContent,
                    selectedPost : x
                })
            }
        }
    }
   /* api.fetchPostContent(postID).then(resp => { 
           let postContent = resp ;
       this.setState({
            currentContent:this.state.currentContent,
            selectedPost : postContent
       });
       }).catch(
           console.log(event)
       )*/
}

currentGroup(){
return "";
}

contentDiv(){
    if(this.state.selectedPost === null){
        return (<div className="contentPara"> <h2>Select a Post </h2></div>);
    }
    return (<PostContent postId={this.state.selectedPost.id} postContent = {this.state.selectedPost}/>)
    
}

render(){
   return(
    <div> 
        <h2> Discussions {this.currentGroup()}</h2>
        <hr />
        <div className="post-grid card">
        <nav className="navbar-default" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">
                    {Object.keys(this.state.currentContent.posts).map(postsid => 
                        <li key={postsid}>
                            <div className="innerpostdiv">
                                <Post key={postsid} onClick = {this.handlePostClick} {...this.state.currentContent.posts[postsid]}/>
                            </div>
                        </li>
                    )}
                                      
                    </ul>
                    </div>
                    </nav>
            </div>
            <div className="contentGrid">
                {this.contentDiv()}
            </div>
        </div>
);
}
};

Discussions.propTypes = {
    userID : React.PropTypes.string.isRequired,
    content: React.PropTypes.array.isRequired,
    userName: React.PropTypes.string.isRequired
}

export default Discussions;