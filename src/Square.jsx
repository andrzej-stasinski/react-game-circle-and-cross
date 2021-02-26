import React from 'react';

class Square extends React.Component {
    render() {
        return(
            <div 
                onClick={this.props.onHandleClick} 
                className="Square"
                style={{color: 'blue'}}
                style={
                    this.props.value === 'X'
                    ? {color: 'red'}
                    : {color: 'blue'}                   
                }             
            >
                {this.props.value}
            </div>
        ); 
    }
}
export default Square