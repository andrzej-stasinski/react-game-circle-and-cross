import React from 'react'
import Square from './Square'
import plumSound from './sounds/plum.mp3'
import plamSound from './sounds/plam.wav'
import bumSound from './sounds/bum.mp3'
import winSound from './sounds/win.wav'
import endSound from './sounds/end.mp3'

class Board extends React.Component {
    state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        countMove: 0,
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        // console.log(squares)

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
                xIsNext: !this.state.xIsNext,
                countMove: this.state.countMove + 1,
            }, () => {
                const winGame = this.findWinner(this.state.squares)
                if(winGame) {
                    const win = new Audio(winSound)
                    win.play()
                }
                if(this.state.countMove === 9 && !winGame) {
                    const endGame = new Audio(endSound)
                    endGame.play()
                }
            })
        } else {
            // console.log('Cant click here')
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
                return squares[x]
            }
        }
        return null
    }
    render() {
        const winner = this.findWinner(this.state.squares)

        let playerMove = winner 
            ? (
            'Winner is player: ' + winner
            ) 
            : this.state.countMove === 9 
                ? ('Game over')
                : ('Player movement: ' + (this.state.xIsNext ? 'X' : 'O')
            )

        return(
            <div>
                <h2 
                >{playerMove}</h2>
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