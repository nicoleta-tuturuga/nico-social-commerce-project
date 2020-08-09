import React from 'react';

const dateAndTime = (props) => {

let currentDateAndTime = new Date();


    let message;
    let elapsedTime = currentDateAndTime - props.dateAndTime
    let elapsedTimeInSeconds = elapsedTime / 1000;
    let elapsedTimeInMinutes = elapsedTimeInSeconds / 60;
    let elapsedTimeInHours = elapsedTimeInMinutes / 60;
    let elapsedTimeInDays = elapsedTimeInHours / 24;
    elapsedTimeInMinutes = Math.round(elapsedTimeInMinutes);
    elapsedTimeInHours = Math.round(elapsedTimeInHours)
    elapsedTimeInDays = Math.round(elapsedTimeInDays)

        if(elapsedTimeInSeconds < 60){
            message = "right now";
        } else if (elapsedTimeInMinutes < 2){
            message = elapsedTimeInMinutes + " " + "minute ago";
        } else if(elapsedTimeInMinutes < 60){
            message = elapsedTimeInMinutes + " " + "minutes ago";
        } else if (elapsedTimeInMinutes > 60 && elapsedTimeInMinutes < 120){
            message = elapsedTimeInHours + " " + "hour ago";
        } else if(elapsedTimeInMinutes > 120 && elapsedTimeInMinutes < 1440 ){
            message = elapsedTimeInHours + " " + "hours ago";
        } else if(elapsedTimeInDays < 2) {
            message = elapsedTimeInDays + " " + "day ago"; 
        }else {
            message = elapsedTimeInDays + " " + "days ago"
            
        }
    
 
    return(
    
        <div>
            {message}
        </div>
    )
}

export default dateAndTime;