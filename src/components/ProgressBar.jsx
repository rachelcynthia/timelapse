import React from 'react';
import Progress from 'react-progressbar';
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
            <div className="progressBar">
                <div id="left">
                    <div className="progText">Days Completed </div><br/>
                    <div className="progBackground"><Progress 
                        completed={done_percent}
                        height="30px"
                        />
                    </div>
                </div>
                <div id="line"></div>
                <div id="right">
                    <div className="progText">Days Remaining </div><br/>
                    <div className="progBackground"
                    style={{}}>
                    <Progress 
                    completed={left_percent}
                    height="30px"
                    /></div>
                </div>
            </div>
        );
    }
}
export default ProgressBar;