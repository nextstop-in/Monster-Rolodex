import React from 'react';
import {CardList} from '../card-list/card-list.componet'
import './search-box.styles.css'

export const SearchBox = ({change,placeholder,monsters}) => { return (
<div >
<input className='search' type='search' placeholder={placeholder} onChange= {change}></input>
<CardList monster= {monsters}></CardList>
</div>

)
}