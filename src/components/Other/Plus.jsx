import React from 'react';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Plus extends React.Component{
    render(){
        //const f=require('react-fontawesome');
        return(
                <div style={{display: "inline", margin: "10px"}}>
                   <FontAwesomeIcon icon={faPlus} />
                </div>
        );
    }
}
export default Plus;