import React from 'react';
class Card extends React.Component{
    DateDay(){
        const dat= new Date(this.props.date);
        if(this.props.days===""){
            return "";
        }
        const days=parseInt(this.props.days)+parseInt(dat.getDate());
        dat.setDate(days);
        const [year,month,day]=dat.toISOString().substr(0,10).split('-');
        return day+"-"+month+"-"+year;
    }
    DateDate(){
        const dateFrom = new Date(this.props.dateFrom);
        const dateTo =new Date(this.props.dateTo);
        const days= (dateTo.getTime()-dateFrom.getTime())/(1000*60*60*24);
        return days;

    }
    render(){
        const ans = this.props.type===1 ? this.DateDay() : this.DateDate();
        return(
        <div id="card">{ans}</div>
        );
    }
}
export default Card;