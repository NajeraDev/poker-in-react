import { useState } from 'react';
import './../Card/styles.scss'

const Card = ({ symbol, number, flipped }) => {

    const isNumber = !isNaN(number);
    const [isFlipped, setIsFlipped] = useState(flipped);

    return <div
    symbol={symbol}
    number={number}
    className={['card', (isFlipped ? 'flipped' : '')].filter(Boolean).join(' ')  }
    onClick={() => setIsFlipped(!isFlipped)}
    >
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

}

export default Card;
