import React from 'react';
import Board from './Board'


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