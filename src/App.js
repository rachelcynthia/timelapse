import React from 'react';
import DateTime from './components/DateTime';
import ProgressBar from './components/ProgressBar';
import Plus from './components/Other/Plus';
import Equal from './components/Other/Equal';
import Card from './components/Card';
import DateInput from './components/DateInput';
import './App.css';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      dateFrom: new Date().toISOString().substr(0,10), 
      dateTo: new Date().toISOString().substr(0,10),
      date: new Date().toISOString().substr(0,10),
      days:0,
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState(
      {[event.target.name]: event.target.value}
      );
  }
  render(){
    return(
      <React.Fragment>
        <DateTime />
        <div className="progress">
          <ProgressBar />
        </div>
        <div className="box">
          <DateInput 
            name={"date"}
            value={this.state.date}
            onChange={this.handleChange}
          />
          <Plus 
            type={1}
          />
          <input 
            type="number" 
            name="days"
            value={this.state.days}
            onChange={this.handleChange}
          />
            <Equal />
              <Card 
              type={1}
              date= {this.state.date}
              days= {this.state.days}
            />
        </div>
        {console.log(this.state.date)}
        <div className="box">
        <DateInput 
            name={"dateFrom"}
            value={this.state.dateFrom}
            onChange={this.handleChange}
          />
          <Plus 
          type={0}
          />
          <DateInput 
            name={"dateTo"}
            value={this.state.dateTo}
            onChange={this.handleChange}
          />
          <Equal />
          <Card 
              type={2}
              dateFrom= {this.state.dateFrom}
              dateTo= {this.state.dateTo}
            />
            
        </div>
          {console.log(this.state.dateFrom + " " +this.state.dateTo)}
      </React.Fragment>
    );
  }

}
export default App;
