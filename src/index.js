import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return(
            <div 
                onClick={this.props.onClick} 
                className="Square">
                {this.props.value}
            </div>
        ); 
    }
}

class Board extends React.Component {
    state = {
            squares: Array(9).fill(null),
            xIsNext: true
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        console.log(squares);
        squares[i] = this.state.xIsNext ? 'X' : 'Y';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    render() {
        return(
            <div>
                <div className="board-row">
                <Square 
                    onClick={() => this.handleClick(0)} 
                    value={this.state.squares[0]}
                />
                </div>
            </div>            
        );
    }
}

class Game extends React.Component {
    render() {
        return(
            <div>
                <Board/> 
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));


