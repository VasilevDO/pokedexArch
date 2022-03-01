import React from "react";
import CardItem from '../CardItem/CardItem'
import '../CardsList/CardList.css';

const CardsList=({cards, title, action})=>{
    if (!cards.length){
        return (
            <h1 className="nameOfThePage">
                Покемонов нема
            </h1>
        )
    }
    return (
       <div className="cardListName">
           <h1 className='nameOfThePage'>
               {title}
            </h1>
            <div className='cardList'>
                {cards.map(card=>
                <CardItem card={card} key={card.id} action={action}/> 
                )}
            </div>
       </div> 
    )
}

export default CardsList