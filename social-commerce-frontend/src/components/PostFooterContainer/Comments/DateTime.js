import React from 'react';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

const dateTime = (props) => {
    return(
        <div>

        </div>
    )
}

export default dateTime;