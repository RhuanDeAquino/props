import React from "react";

class Props extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            troca : null 
        }
    }
    listarprops = (zoio) => {
        console.log(this.state.troca)
        this.setState ({
            troca : zoio
        })
        console.log(this.state.troca)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.listarprops('Ta tirando Alek, Karaí')}>Alek</button>
                <h1>{this.state.troca}</h1>
            </div>
        )
    }
}
export default Props;