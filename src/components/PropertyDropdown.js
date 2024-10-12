import React, {useState, useEffect, useContext} from 'react';

import {RiHome4Line, RiArrowDow , RiArrowUpSLine, RiHome5Line} from "react-icons/ri"

import { Menu } from '@headlessui/react'; 

import { HouseContext } from './HouseContext';
const PropertyDropdown = () => {
  const {property ,setProperty, properties } = useContext(HouseContext)

  console.log(properties);

  const [isOpen, setIsopen] = useState(false)
  return (
    <Menu as="div" className='dropdown relative'> 
      <Menu.Button  onClick={()=> setIsopen(!isOpen)} className='dropdown-btn w-full text-left py-8'>
            <RiHome5Line className='dropdown-icon-primary' />
            <div className='text-[15px] '>
              <div> {property} </div>
              <div className='text-[13px]'> Select Your Place </div>
              </div>
              {
                isOpen ? ( 
                 <RiArrowUpSLine className='dropdown-icon-secondary' />  
                ) : ( 
                  <RiArrowUpSLine className="dropdown-icon-secondary" />
                )
              }
           
      </Menu.Button>

      <Menu.Items className='dropdown-menu'> 
        {properties.map((property,index)=>{return(
          <Menu.Item  
          onClick={()=>setProperty(property)}
          className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}> 
                  {property}
          </Menu.Item>
        )})}
      </Menu.Items>
      
      </Menu>
  ) 
};

export default PropertyDropdown ;