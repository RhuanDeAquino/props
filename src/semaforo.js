import React from 'react';

class Semaforo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            semaforo: null
        };
    }
    ficarAmarelo = () => {
        this.setState ({
            semaforo: 'Amarelo'
        })
    }
    ficarVermelho = () => {
        this.setState ({
            semaforo: 'Vermelho'
        })
    }
    ficarVerde = () => {
        this.setState ({
            semaforo: 'Verde'
        })
    }
    render () {
        return (
            <div className="App">
                <p>{this.state.semaforo}</p>
                <button onClick={this.ficarVermelho}>Vermelho</button>
                <button onClick={this.ficarAmarelo}>Amarelo</button>
                <button onClick={this.ficarVerde}>Verde</button>
            </div>
        );
    }
}

export default Semaforo;