import React from "react";
// Add delete functionality to comments section
class Comment extends React.Component{
    render(){
     return(<div>
            <div id="content">
                <p>{this.props.body}</p>
                </div>
            <div id="dateholder">
                <div className="leftDate"> Posted By: <a>{this.props.postedby}</a></div>
                
                <div className="rightDate">
                     Posted on: {this.props.postedon}
                </div>
            </div>
        </div>
     );
    }
}

Comment.proptypes= {
    c_id: React.PropTypes.number.isRequired,
    postedon : React.PropTypes.string.isRequired,
    postedby: React.PropTypes.string.isRequired,
    body:React.PropTypes.string.isRequired,
    key : React.PropTypes.number.isRequired
}
export default Comment;