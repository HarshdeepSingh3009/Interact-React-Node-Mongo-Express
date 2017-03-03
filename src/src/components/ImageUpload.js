import React from 'react';
import axios from 'axios';
//import fs from "fs";


class ImageUpload extends React.Component {
    
    state = {file: '',imagePreviewUrl: ''};

  _handleSubmit(e) {
    e.preventDefault();
    var formData= new FormData();
    formData.append('image',this.state.file);
    axios.post('/home/uploadImage/upload',formData)
    .then((resp) => console.log(resp) // redirect to home page if successful
    ).catch((error) => console.error(error))
    //console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    
    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img  className="show-image-preview"src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" ref = "inputTag"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}


ImageUpload.propType = {
    close: React.PropTypes.func.isRequired
}
export default ImageUpload;