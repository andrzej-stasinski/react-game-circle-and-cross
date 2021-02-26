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

class Board extends React.Component {
    state = {
            squares: Array(9).fill(null),
            xIsNext: true
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        console.log(squares);
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return <Square 
            onHandleClick={() => this.handleClick(i)} 
            value={this.state.squares[i]}
        />
    }
    render() {
        const playerMove = 'Player movement: ' + (this.state.xIsNext ? 'X' : 'O')
        return(
            <div>
                {/* <h3>Player movement: {this.state.xIsNext ? 'X' : 'O'}</h3> */}
                <h3>{playerMove}</h3>
                <div className="board-row">
                <Square 
                    onHandleClick={() => this.handleClick(0)} 
                    value={this.state.squares[0]}
                />
                <Square 
                    onHandleClick={() => this.handleClick(1)} 
                    value={this.state.squares[1]}
                />
                <Square 
                    onHandleClick={() => this.handleClick(2)} 
                    value={this.state.squares[2]}
                />
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>            
        );
    }
}

export default Board