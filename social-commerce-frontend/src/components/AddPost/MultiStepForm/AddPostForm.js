import React, {Component} from 'react';

import ProgressBar from './ProgressBar';
import classes from './AddPostForm.css';
import ImageStep from './Steps/ImageUpload/ImageStep';
import DropdownStep from './Steps/Dropdown/DropdownStep';
import DimensionsStep from './Steps/Dimensions/DimensionsStep';
import PriceStep from './Steps/PriceAndDescription/PriceStep';

const NUMBER_OF_STEPS = 4;

class addPostForm extends Component {
    
    state = {
        step: 1,
        inputField: '',
        dropdownMenu: '',
        images: [],
        category: '',
        Umeri: "", 
        Talie: "", 
        Sold: "", 
        Bust: "", 
        Lungime: "",
        price: "",
        cantity: "",
        description:"",
        level: "",
        male: "",
        female: "",
        optionofworness: ""
    }

//Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({step: step + 1})
    };

//Proceed to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1})
    };

//publish post
    finalStep = () => {

    };

//Handle fields change
    // handleChange = dropdown => event => {
    //     this.setState({[dropdown]: event.target.value})
    // };

    addImages = (newImages) => {
        let allImages = this.state.images;
        for(var i = 0; i < newImages.length; i++){
            allImages.push(newImages[i]);
        };

        this.setState({images: allImages})
        console.log(allImages)
        // console.log(this.state.images)
    }

    removeAllImages = (img) => {
        console.log(this.state)
        this.setState({
            images: []
        })
    }

    removeImage = (item) => {
        console.log(this)

        const remainingImages = this.state.images.filter(img => {
            return img !== item;
            });

            // this.setState({images: [...remainingImages]})
            
            this.setState({images: remainingImages})

        // this.setState(prevState => ({
        //     images: prevState.images.filter(el => el !== id )
        // }));
    }

    setCategory = (event) => {
        this.setState({category: event});
    };

    setDimensions = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }

    handleDetails = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addDescription = (event) => {
        this.setState({description: event.target.value});
    };

    setLevel = (event) => {
        this.setState({level: event});
    };

    setGenderFemale = (event) => {
        this.setState({female: event.target.value})
    }

    setGenderMale = (event) => {
        this.setState({male: event.target.value})
    }

    setOptionofworness = (event) => {
        this.setState({optionofworness: event.target.value});
    }

    render(){

        const { step } = this.state;
        const {inputField, dropdownMenu} = this.state;
        const values = {inputField, dropdownMenu};

        const progressProcent = ((step-1) / (NUMBER_OF_STEPS-1) * 100)+1;
        console.log(progressProcent)

        let stepComponent;

        
        switch(step) {
            case 1:
                stepComponent = <ImageStep 
                addImages={this.addImages} 
                images={this.state.images}
                removeAllImages={this.removeAllImages}
                removeImage={this.removeImage}
                />;
                break;
            case 2:
                stepComponent = <DropdownStep 
                setCategory={this.setCategory}
                category={this.state.category}
                setLevel={this.setLevel}
                level={this.state.level}
                setGenderFemale={this.setGenderFemale}
                setGenderMale={this.setGenderMale}
                male={this.state.male}
                female={this.state.female}
                setOptionofworness={this.setOptionofworness}
                optionofworness={this.state.optionofworness}
                />;
                break;
            case 3:
                stepComponent = <DimensionsStep 
                setDimensions={this.setDimensions}
                umeri={this.state.Umeri}
                talie={this.state.Talie} 
                sold={this.state.Sold} 
                bust={this.state.Bust} 
                lungime={this.state.Lungime}
                />
                break;
            case 4: 
                stepComponent = <PriceStep 
                handleDetails={this.handleDetails}
                price={this.state.price}
                cantity={this.state.cantity}
                addDescription={this.addDescription}
                description={this.state.description}
                />
                break
        }
        

        let rightButton; 

        if (step < NUMBER_OF_STEPS){
            rightButton = <button className="btn btn-outline-primary"
            type="button" 
            onClick={this.nextStep}>  
                Next      
            </button>
        } else {
            rightButton = <button className="btn btn-outline-danger"
            type="button"
            onClick={this.finalStep}>
                Add Post
            </button> 
        }

        let leftButton;
        if(step === 1){
            leftButton = <button className="btn btn-outline-danger" 
            type="button"
            onClick={this.props.onClick}>
                Cancel
            </button>
        } else {
            leftButton = <button className="btn btn-outline-primary"
            type="button"
            onClick={this.prevStep}>
                Back
            </button>
        }

        return(
            <div className="container-fluid">
                <ProgressBar 
                percent={progressProcent}
                />

                    {stepComponent}
                
               <br/><br/><br/>
                <div className="row">
                    <div className="col-sm-6  text-left">
                        {leftButton}
                    </div>

                    <div className="col-sm-6 text-right">  
                        {rightButton}  
                    </div>

                </div>  
            </div>
            
        )
    }
    
}

export default addPostForm;