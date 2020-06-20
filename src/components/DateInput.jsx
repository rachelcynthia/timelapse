import React from 'react';
class DateInput extends React.Component{
    render(){
        return(
            <>
                <input type="date" name= {this.props.name} value={this.props.value} onChange={this.props.onChange} />
            </>
        );
    }
}
export default DateInput;