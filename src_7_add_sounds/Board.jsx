import React from 'react';
import useSound from 'use-sound'
import plumSound from './sounds/plum.mp3'
import plamSound from './sounds/plam.wav'

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
const Boom = () => {
    const [plum] = useSound(plumSound)
    return <button onClick={plum}>Boom</button>
}
class Board extends React.Component {
    state = {
            squares: Array(9).fill(null),
            xIsNext: true
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        console.log(squares);

        const plum = new Audio(plumSound)
        // plum.play()
        const plam = new Audio(plamSound)
        // /plam.play()

        this.state.xIsNext ? plum.play() : plam.play()

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
                <Boom />
            </div>            
        );
    }
}

export default Board