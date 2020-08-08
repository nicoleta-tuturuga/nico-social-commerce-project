import React, {Component} from 'react';

import classes from './ImageStep.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class addPostMessage extends Component {


    handleChange = (event) => {
        console.log(event.target.files);
        const mappedFiles = [];
        for(var i = 0; i < event.target.files.length; i++){
            mappedFiles.push(URL.createObjectURL(event.target.files[i]));
        };
        // this.setState({
        //   files: mappedFiles
        // });
        this.props.addImages(mappedFiles);
      };

      handleClick = (e) => {
          this.inputElement.click();
      }

      removeAllImagesHandler = (img) => {
          this.props.removeAllImages(img);
      };

      removeImageHandler = (item) => {
          this.props.removeImage(item);
      };

      render(){
        
        // let mappedImages = this.props.images.map(item =>{
        //     return<img src={item} className="uploadedImg" />
        // })

        let allImagesRemoved = this.props.images.length;
        let button; 

        if(allImagesRemoved > 0){
            button = <button className="removeAllBtn"
                onClick={this.removeAllImagesHandler}>
                    Remove All
            </button>
        }

        return(
            <div>
                <br />
                <br />
                <h2>Welcome from the first Step. The Image Step</h2>
                <p>Choose you images from here : </p>
                
                <div className="gallery-container">
                    <div className="gallery-grid" ref={this.dragulaDecorator}>
                        {/* {mappedImages} */}
                       

                        {this.props.images.map((item) => (
                            <div className="img-wrap">
                            <span className="close">&times;</span>
                            <img 
                            alt="" 
                            src={item} 
                            key={item.id} 
                            className="uploadedImg"/>
                            <span className="close"
                            onClick={() => {this.removeImageHandler(item)}}
                            key={item}>
                                &times;
                            </span>
                            </div>
                        ))}
                        
                        {/* <FontAwesomeIcon 
                        onClick={this.handleClick}
                        icon="cloud" 
                        class="btn-cloud"  */}
                        <img
                        alt=""
                        src={ require('../../../../../assets/images/Capture.PNG') }
                        onClick={this.handleClick}
                        width="155px"
                        cursor="pointer"
                        />
                            <input 
                            ref={input => this.inputElement = input}
                            type="file" 
                            name="myfile"
                            multiple accept="image/*"
                            onChange={this.handleChange}
                            />  
                        
                    </div>

                    <br/ >
                    <div className="container">
                        {button}
                    </div>

                    </div>
                </div>
        
        )    
    }
}


export default addPostMessage;