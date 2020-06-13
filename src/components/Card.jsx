import React from 'react';
class Plus extends React.Component{
    DateDay(){
        return("Hello");
    }
    DateDate(){
        return ("hey");
    }
    render(){
        const styleEle={display: "inline",backgroundColor:"white",marginLeft:"20px", padding:"15px"};
        const ans = this.props.type===1 ? this.DateDay() : this.DateDate();
        console.log(this.props.type);
        return(
        <div style={styleEle}>{ans}</div>
        );
    }
}
export default Plus;