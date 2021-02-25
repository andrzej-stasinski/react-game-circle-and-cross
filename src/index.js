import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board2 extends React.Component {
    render() {
        return(
            <h2>Hello World {this.props.name}</h2>
        ); 
    }
}

function Board1(props) {
    return <h2>Hello {props.name}</h2>
}

const Board3 = (props) => {
    return <h2>Hello {props.name}</h2>
}

const Board4 = (props) => (
    <h2>Hello {props.name}</h2>
)

class Game extends React.Component {
    render() {
        return(
            <div>
                <h1>Przekazanie atrybutów jako props</h1>
                <Board1 name="Antoni nr 1"/>
                <Board2 name="Babra nr 2"/>
                <Board3 name="Genowefa nr 3"/>
                <Board4 name="Gerwazy nr 4"/>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));


