import React from 'react';
class DateTime extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  next(ev){
    if(ev<11 && ev>19){
      switch(ev%10){
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }
    else{
      return "th";
    }
  }
    render(){
      const thisStyle={
        textAlign: "right",
        width: "100%",
        paddingTop:"10px",
        paddingBottom: "10px",
        color:"white",
        backgroundColor:"black"
      };
      const day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      const month=["January", "February","March","April","May","June","July","August","September","October","November","December"];
      const theDate=this.state.date.getDate();
      return(
        <div style={thisStyle}>
          <div style={{textAlign:"left", position:"absolute",paddingLeft:"20px"}}>Timelapse</div>
            {theDate}{this.next(theDate)}&nbsp;&nbsp;
            {month[this.state.date.getMonth()]}&nbsp;&nbsp;
            {day[this.state.date.getDay()]}&nbsp;&nbsp;
            {this.state.date.toLocaleTimeString()}&nbsp;&nbsp;
        </div>
      );
    }
}
export default DateTime;