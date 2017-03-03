import React from "react";
import ReactDOM from "react-dom";
import Discussions from "./Discussions";
import * as api from "../dataApi";
import Image from "./ImageUpload";
import Boron from "boron";
import axios from "axios";

class Home extends React.Component{
   state = {
       discussions: [],
       userId : "har1232",
       userName: "Harsh",
       ProfPic: "assets/img/find_user.png",
       //TODO change hardcoded values
   } 
   
   
    toggleDialog = function(ref){

        return function(){
            this.refs[ref].toggle();
        }.bind(this)
    }

    getContent= function(modalName){
        return <div>
        <Image close = {this.toggleDialog(modalName)}/>
            <button onClick={this.toggleDialog(modalName)}>Close</button>
        </div>
    }

    getTiggerAndModal =  function(modalName){
        var Modal = Boron[modalName];

        return <div>
        <Modal ref={modalName}>{this.getContent(modalName)}</Modal>
        </div>
    }
   
   handleUploadImage = () =>{
    return axios.get('/getProfileImage').then(resp =>  {
         if (resp.data){
            return resp.data ;
        }
         else{
            return ("assets/img/find_user.png");
        }
        }).catch(error => console.error(error))
    }

   handleDiscussionClick = () =>{
       api.fetchDiscussions(this.state.userId)
       .then(resp => { 
           let records = resp 
       this.setState({
            discussions:records,
            userId: this.state.userId,
            userName: this.state.userName,
            ProfPic:this.state.ProfPic

       });
       })
       .catch()
        console.log(event)
    }
    
    componentDidMount(){
        this.handleUploadImage().then(resp =>{
            let file = "assets/img/" + resp;
            this.setState({
            discussions:this.state.discussions,
            userId: this.state.userId,
            userName: this.state.userName,
            ProfPic: file,
     }); 
        });
    
    }
    
    CurrentContent = () =>{
        if (this.state.discussions.length === 0){
        return(<h2> Welcome {this.state.userName} !! </h2>); 
    }
    return (<Discussions content = {this.state.discussions} userID= {this.state.userId} userName={this.state.userName}/>);
}

    render(){
         let modalName = "DropModal";
       var Modal = Boron[modalName];
        return(
    <div id="wrapper">   
        <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">
                    <li className="text-center user-image-back show-image">
                        <div id="newImage"><img src={this.state.ProfPic} className="img-responsive" id = "newImageimg" /></div>                      
                        <input className="update" type="button" value="Update" onClick={this.toggleDialog(modalName)}/>
                        <input className="delete" type="button" value="Remove" />
                    </li>
                    <li id="optionDiscussion" onClick = {this.handleDiscussionClick}>
                        <a > <i className="fa fa-desktop "></i>Discussions</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-edit "></i>About<span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="#">Personal</a>
                            </li>
                            <li>
                                <a href="#">Education</a>
                            </li>
                        </ul>
                    </li>

                </ul>

            </div>

        </nav>
       
        <div id="page-wrapper" >
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                     {this.CurrentContent()}   
                    </div>
                </div>              
                <div>
                    {this.getTiggerAndModal("DropModal")}
                    </div>
                  {/*<hr />         */}
    </div>
            </div>
        
        <script src="assets/js/jquery-1.10.2.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.metisMenu.js"></script>
        <script src="assets/js/custom.js"></script>
        </div>
        );
    }
}


export default Home;
