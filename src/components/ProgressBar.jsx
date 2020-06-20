import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
class ProgressBar extends React.Component{
    render(){
        const date = new Date();
        const first= new Date(date.getFullYear(),0,1);
        const last=new Date(date.getFullYear(),11,31);
        const today=date;
        const left= Math.round((last.getTime()-today.getTime())/(1000*60*60*24));
        const done = Math.round((today.getTime()-first.getTime())/(1000*60*60*24));
        const left_percent = Math.round((left/365) *100);
        const done_percent = Math.round((done/365)*100);
        return(
            <div style={{paddingBottom:"50px"}}>
                <div style={{width:"45%", float:"left"}}>
                    Days Completed in the year : {done}<br/>
                    <Progress percent={done_percent}/>
                </div>
                <div style={{width:"45%", float:"right"}}>
                    Days Left in the year: {left} <br/>
                    <Progress percent={left_percent}/>
                </div>
            </div>
        );
    }
}
export default ProgressBar;