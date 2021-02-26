import React from 'react'
import Square from './Square'
import plumSound from './sounds/plum.mp3'
import plamSound from './sounds/plam.wav'
import bumSound from './sounds/bum.mp3'
import winSound from './sounds/win.wav'

class Board extends React.Component {
    state = {
            squares: Array(9).fill(null),
            xIsNext: true
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        console.log(squares)
        console.log(squares[i])

        if(this.findWinner(squares)) {
            return
        }

        if(squares[i] === null) {
            // sounds
            const plum = new Audio(plumSound)
            const plam = new Audio(plamSound)
            this.state.xIsNext ? plum.play() : plam.play() 

            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext
            }, () => {
                if(this.findWinner(this.state.squares)) {
                    const win = new Audio(winSound)
                    win.play()
                }
            })
        } else {
            console.log('Cant click here')
            const bum = new Audio(bumSound)
            bum.play()
        }
        
    }
    renderSquare(i) {
        return <Square 
            onHandleClick={() => this.handleClick(i)} 
            value={this.state.squares[i]}
        />
    }
    findWinner(squares) {
        const win = new Audio(winSound)
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for(let i=0; i<lines.length; i++) {
            const [x, y, z] = lines[i]
            if(squares[x] === squares[y] && squares[x] === squares[z]) {
                console.log(squares[x])
                return squares[x]
            }
        }
        return null
    }
    render() {
        const winner = this.findWinner(this.state.squares)
        {winner ? console.log('Winner player: ' + winner) : console.log('no won')}

        const playerMove = winner 
            ? (
            'Winner is player: ' + winner
            ) 
            : ('Player movement: ' + (this.state.xIsNext ? 'X' : 'O')
            )
        
        // const playerMove = 'Player movement: ' + (this.state.xIsNext ? 'X' : 'O')
        return(
            <div>
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
                    {this.renderSquare(2)}
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