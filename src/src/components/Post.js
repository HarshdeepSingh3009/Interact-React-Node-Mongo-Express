import React from "react";

class Post extends React.Component{
    render(){
     return(<div>
            <div>
                <p>{this.props.title}</p>
            </div>
            <div>
                <div className="left-div"> Posted By: <a>{this.props.postedby}</a></div>
                
                <div className="right-div">
                     Posted on: {this.props.posteddate}
                </div>
            </div>
        </div>
     );
    }
}

Post.proptypes= {
    id: React.PropTypes.number.isRequired,
    posteddate : React.PropTypes.string.isRequired,
    postedby: React.PropTypes.string.isRequired,
    title:React.PropTypes.string.isRequired,
    content:React.PropTypes.string.isRequired,
    key : React.PropTypes.number.isRequired
}
export default Post;