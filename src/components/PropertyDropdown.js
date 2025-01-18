import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from '@headlessui/react'; 
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left py-8 flex items-center justify-between"
      >
        <div className="flex items-center">
          <RiHome5Line className="dropdown-icon-primary mr-2" />
          <div className="text-[15px]">
            <div>{property}</div>
            <div className="text-[13px] text-gray-500">Select Your Place</div>
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu absolute w-full bg-white shadow-lg rounded-lg py-2 z-10">
        {properties.map((propertyItem, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <li
                onClick={() => {
                  setProperty(propertyItem);
                  setIsOpen(false); 
                }}
                className={`cursor-pointer px-4 py-2 ${
                  active ? 'bg-violet-700 text-white' : 'text-gray-700'
                }`}
              >
                {propertyItem}
              </li>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
