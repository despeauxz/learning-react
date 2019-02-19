const players = [
    {
        id: 1,
        name: 'Treasure',
        score: 10
    },
    {
        id: 2,
        name: 'Ashley',
        score: 12
    },
    {
        id: 3,
        name: 'James',
        score: 1
    },
    {
        id: 4,
        name: 'Malik',
        score: 10
    }
];

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter  />
        </div>
    );
}

class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={props.initialPlayers.length}
            />

            {props.initialPlayers.map( player =>
                <Player
                    key={player.id.toString()}
                    name={player.name} 
                />    
            )}
        </div>
    );
}

ReactDOM.render(
    <App initialPlayers={players} /> ,
    document.getElementById('root')
);