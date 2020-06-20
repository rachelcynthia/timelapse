import React from 'react';
class Card extends React.Component{
    DateDay(){
        const dat= new Date(this.props.date);
        if(this.props.days===""){
            return "";
        }
        const days=parseInt(this.props.days)+parseInt(dat.getDate());
        dat.setDate(days);
        return dat.toISOString().substr(0,10);
    }
    DateDate(){
        const dateFrom = new Date(this.props.dateFrom);
        const dateTo =new Date(this.props.dateTo);
        const days= (dateFrom.getTime()-dateTo.getTime())/(1000*60*60*24);
        return days;

    }
    render(){
        const styleEle={display: "inline",backgroundColor:"white",marginLeft:"20px", padding:"15px"};
        const ans = this.props.type===1 ? this.DateDay() : this.DateDate();
        return(
        <div style={styleEle}>{ans}</div>
        );
    }
}
export default Card;