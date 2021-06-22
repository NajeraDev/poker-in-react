import React from 'react'
import './App.css';


class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    (async () => {
      const cards = await (await fetch(`http://localhost:4001/${this.props.path}`)).json()
      this.setState({ cards })

    })();
  }

  render() {
    console.log(this.state.cards)
      console.log(this.state.cards[`${this.props.path === "Table" ? "deck" : "hand"}`])
    return <div>
      {
        (this.state.cards.length === 0) ?
        <div> Loading... </div>
        : 
          <div>
          <h3> {`${this.props.path === "Table" ? "Table" : "Yor Hand"}`} </h3>
          <div className="deck">
            {
              //hand deck
              this.state.cards[`${this.props.path === "table" ? "deck" : "hand"}`].map((card, index)=>{ 
                const number = card.slice(0, -1)
                const symbol = card.slice(-1)

                const isNumber = !isNaN(number)

                return <div className="card" number={number}>
                          <div className="container">
                            <div className="back"></div>
                            <div className="front">
                              <div className="card-corner top-left">
                                <div>{number}</div>
                                <div>{symbol}</div>
                              </div>
                              <div className="symbols">
                                {
                                  number === 'A' ?
                                    <div className="Asymbol">{symbol}</div> : ""
                                }
                                {
                                  isNumber
                                    ? new Array(parseInt(number))
                                      .fill(symbol)
                                      .map(
                                        (cardSymbol) => <div>{cardSymbol}</div>)
                                    : ""
                                }
                                {
                                  number === 'J' || number === 'Q' || number === 'K' ?
                                    <div className="image"></div>
                                    : ""
                                }
                              </div>
                              <div className="card-corner bottom-right">
                                <div>{number}</div>
                                <div>{symbol}</div>
                              </div>
                            </div>  
                          </div>
                       </div>      
              })
            }
          </div>
          </div>
      }
    </div>
  }
}

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <Deck title="Table" path="table" />
        <Deck title="Hand" path="hand" />
      </header>
    </div>
  );
}

export default App;
