import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import SearchContext from '../../context/SearchContext';

const Navbar = () => {

    const {search, setSearch} = useContext(SearchContext)

    //handles change in search bar using search context
    const handleSearchChange = (searchString) => {
        setSearch(searchString)
    }

  return (
    <div className='navbar'>    
        <ul className='btnlist'>
            <li className='listItem'>
                <Link to="" className='btn'>Shop</Link>
            </li >
            <li className='listItem'>
                <Link to="cart"className='btn'>Cart</Link>
            </li>
            <li className='listItem'>
                <a className='btn'>Filters</a>
            </li>
        </ul>
        <input type='text' className='search' placeholder='Search...' onChange={(e)=>handleSearchChange(e.target.value)}/>
    </div>
  )
}

export default Navbar;
