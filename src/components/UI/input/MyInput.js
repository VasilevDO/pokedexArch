import React,{useRef} from "react";
import MyButton from "../button/MyButton";
import './MyInput.css'

const MyInput=(props)=>{
    const ref=useRef()
    const handleButtonClick=()=>{
        const query=ref.current.value
        props.action(query)
    }
    return (
        <div>
            <input className="MyInput" ref={ref} />
            <MyButton onClick={handleButtonClick}>Найти</MyButton>
        </div>
        
        
    )
}

export default MyInput