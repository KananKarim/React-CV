import React from "react";
import './style.css'

const PersonalInfo = ({name,surname,age,location}) =>{
    return(
        <div className="personal-info">
            <h1>Fullname:{name} {surname}</h1>
            <p>Age:{age}</p>
            <p>Location:{location}</p>
        </div>
    )
}

export default PersonalInfo;