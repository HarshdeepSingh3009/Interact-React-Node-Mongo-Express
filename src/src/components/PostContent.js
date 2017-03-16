import React from "react";
import Comment from "./Comment";

class PostContent extends React.Component {
    state = {
        currentContent: this.props.postContent
    }

    render() {
        return (
            <div id="rightdiv">
                <div id="postcontent" >
                    <div id="upperdiv" className="card">
                        <div id="title">
                            Question
                        </div>
                        <hr />
                        <div id="content">
                            <h4><b>{this.state.currentContent.title}</b></h4>
                            <br/>
                            {this.state.currentContent.content}
                        </div>
                        <br/>
                        <div id="dateholder">
                            <div className="leftDate" >Posted By: <a> {this.state.currentContent.postedby}
                            </a></div>
                            <div className="rightDate"> Posted on: {this.state.currentContent.posteddate}
                            </div>
                        </div>
                    </div>
                    <div id="centerdiv" className="card">
                        <div id="title">Comments</div>
                        <ul className="nav" id="main-menu">
                            {Object.keys(this.state.currentContent.comments).map(commentid =>
                                <li key={commentid} className="comment">
                                    <div className="innerpostdiv">
                                        <Comment key={commentid}  {...this.state.currentContent.comments[commentid]} />
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div id="lowerdiv" className="card">
                        <div id="title"> Write a Comment</div>
                        <div >
                            <textarea name="comment" id="commentbox"></textarea>
                        </div>
                        <div>
                            <button type="button" id="btnPost">Add Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

PostContent.propTypes = {
    postId: React.PropTypes.number.isRequired,
    postContent: React.PropTypes.object
}

export default PostContent;