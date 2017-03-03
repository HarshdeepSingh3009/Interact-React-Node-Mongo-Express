import React from 'react';
import UploadImage from "./ImageUpload";


class Image extends React.Component {

   state = { modalActive: this.props.isModalActive}

 closeModal () {
    this.setState({ modalActive: false })
  }

  render () {
    return (
     <div>
        {this.state.modalActive && (
          <div className='modalDialog'>
            <a title='Close' onClick={this.closeModal}>X</a>
            <h2>Modal</h2>
            <UploadImage />
          </div>
        )}
      </div>
    )
  }
}

Image.propsType = {
  isModalActive: React.PropTypes.bool 
}

export default Image;