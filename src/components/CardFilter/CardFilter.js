import React from "react";
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';


const CardFilter=({filter, setFilter})=>{
    return (
        <div>
            <MyInput
                value={filter.query}
                action={(query)=>{setFilter({...filter, query})}}
                placeholder='Покемоиск'
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка по'
                options={[
                    {value: 'name', name: 'По имени'},
                    {value: 'id', name: 'По id'}

                ]}
            />
      </div>
    )
}

export default CardFilter