import React from "react";

class Post extends React.Component{
    render(){
     return(<div>
            <div>
                {this.props.title}
            </div>
            <div>
                <div className="leftDate"> Posted By: <a>{this.props.postedby}</a></div>
                
                <div className="rightDate">
                     Posted on: {this.props.posteddate}
                </div>
            </div>
        </div>
     );
    }
}

Post.propTypes= {
    id: React.PropTypes.number.isRequired,
    posteddate : React.PropTypes.string.isRequired,
    postedby: React.PropTypes.string.isRequired,
    title:React.PropTypes.string.isRequired,
    content:React.PropTypes.string.isRequired,
    key : React.PropTypes.number
}
export default Post;