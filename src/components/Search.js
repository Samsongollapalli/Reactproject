import React, { useContext } from 'react';

import CountryDropdown from "./CountryDropdown"
import PropertyDropdown from "./PropertyDropdown"
import PriceRangeDropdown from "./PriceRangeDropdown"

import {RiSearch2Line} from "react-icons/ri"
import { HouseContext } from './HouseContext';
const Search = () => {
 const {handleClick} = useContext(HouseContext)
  const {houses} = useContext(HouseContext)
  console.log(houses)
  return ( 
  <div className='px-[30px] py-3 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg pt-5' >
        <CountryDropdown />
        <PropertyDropdown /> 
        <PriceRangeDropdown />
        <button onClick={()=>handleClick()} className='bg-violet-700 hover:bg-violet-800 lg:max-[162px] h-16 rounded-lg flex justify-center items-center text-white px-10 h-9 text-lg' >
          <RiSearch2Line />
        </button>
  </div>
  
)
};

export default Search;
