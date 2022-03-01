import React from "react";
import MyButton from "../button/MyButton";
import { getPagesArray } from "../../../utils/pages";

const Pagination=({totalPages, page, changePage})=>{
    let pagesArray=getPagesArray(totalPages, page)
    // console.log(pagesArray)
    return (
        <div className='pageBar'>
            <MyButton  onClick={()=>changePage(1)}>{'<<<'}</MyButton>
                {pagesArray.map(p=>
            <span 
                className={page===p?'myBtn currentPage':'myBtn'}
                onClick={()=>changePage(p)}
                key={p}
            >
                {p}
            </span> )}
                <MyButton onClick={()=>changePage(totalPages)}>{'>>>'}</MyButton>
        </div>
    )
}

export default Pagination