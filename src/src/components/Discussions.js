import React from "react";
import Post from "./Post";

class Discussions extends React.Component{
     state ={
        currentContent: this.props.content[0],
    }
handlePostClick(){

}
currentGroup(){
return "";
}

contentDiv(){
    return (<div className="contentPara"> <h2>Select a Post </h2></div>);
}

render(){
   return(
    <div> 
        <h2> Discussions {this.currentGroup()}</h2>
        <hr />
        <div className="post-grid">
        <nav className="navbar-default" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">
                    {Object.keys(this.state.currentContent.posts).map(postsid => 
                        <li key={postsid} >
                            <div>
                                <Post key={postsid} onClick = {this.handlePostClick()} {...this.state.currentContent.posts[postsid]}/>
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