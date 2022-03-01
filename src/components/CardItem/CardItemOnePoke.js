import React from "react";
import MyButton from "../UI/button/MyButton";
import './CardItemOnePoke.css';
import {useNavigate } from 'react-router-dom';
import PokeStore from "../Models/PokeStore";

const CardItemOnePoke = (props) => {
    const navigate=useNavigate ()
    const handleButtonClickChangeCatched=(id)=>{
        PokeStore.changeCatched(props.card.id)
        action()

    }
    const {action}=props

    return (
        <div className="card">
            <div className="card__content">
                <div className='imageBG'>
                    
                </div>
                <div className="imageBox">
                    <img src={props.card.imageURL} className="image" onClick={()=>navigate(`/allPokemons/${props.card.id}`)}/>
                </div>
                <hr/>
                <div className="card__text">
                    <strong> ID Покемонеса:  {props.card.id} {props.card.title} </strong>
                    
                    <div>
                        Имя покемонеса: {props.card.name}
                    </div>

                    <div>
                        Типы: {props.card.types}
                    </div>
    
                    <div>
                        Вес: {props.card.weight}
                    </div>

                    <div>
                        Базовый опыт: {props.card.base_experience}
                    </div>

                    <div>
                        Рост: {props.card.height}
                    </div>
                </div>
                
            </div>
            {/* <div className="card__btns">
                <MyButton
                   onClick={handleButtonClickChangeCatched} 
                >
                    {props.card.catched?'Opustit':"Poymat"}
                </MyButton>
            </div> */}
            
        </div>
    )
}

export default CardItemOnePoke