import { useState, useEffect } from 'react';
import Card from './../Card/index'

const Deck = ({ className, children, title, path, flipped }) => {
    const [cards, setCards] = useState([])


    useEffect(()=>{
        (async () =>{
            setCards(await (await fetch(`http://localhost:4001/${path}`)).json())
        })();
    },[path])

    return <div className={['deck', className].filter(Boolean).join('')}>
         {(cards.length === 0) ?
         <div>Loading...</div> :
         <>
            {children}
            <div className='deck-cards'>{ cards[`${path === "table" ? "deck" : "hand"}`].map((card, key) =>{
                const number = card.slice(0, -1)
                const symbol = card.slice(-1)
                const isFlipped = parseInt(flipped) > key

                return <Card {...{symbol, number, key, flipped: isFlipped}} />
            })}</div>
         </>
         }
     </div>
}

export default Deck;