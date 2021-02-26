import React from 'react';

class Square extends React.Component {
    render() {
        return(
            <div 
                onClick={this.props.onClick} 
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
        squares[i] = this.state.xIsNext ? 'X' : 'Y';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return <Square 
            onClick={() => this.handleClick(i)} 
            value={this.state.squares[i]}
        />
    }
    render() {
        return(
            <div>
                <div className="board-row">
                <Square 
                    onClick={() => this.handleClick(0)} 
                    value={this.state.squares[0]}
                />
                <Square 
                    onClick={() => this.handleClick(1)} 
                    value={this.state.squares[1]}
                />
                <Square 
                    onClick={() => this.handleClick(2)} 
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

class Game extends React.Component {
    render() {
        return(
            <div className='game'>
                <h2 className='header'>Game circle &amp; cross</h2>
                <Board/>
            </div>
        );
    }
}
export default Game