
import React, { createContext, useEffect, useState } from 'react'
import { housesData } from '../data'

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData)
  const [country, setCountry] = useState('Location (any)')
  const [property, setProperty] = useState('Property (any)')
  const [price, setPrice] = useState('Price range (any)')
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries)
  }, [houses])

  useEffect(() => {
    const allProperties = houses.map((house) => house.type)
    const uniqueProperties = ['Property (any)', ...new Set(allProperties)]
    console.log(uniqueProperties)
    setProperties(uniqueProperties)
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => str.split(' ').includes('(any)')
    const miniPrice = parseInt(price.split(' ')[0])
    const maxPrice = parseInt(price.split(' ')[2])

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price)

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= miniPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        return housePrice >= miniPrice && housePrice <= maxPrice;
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= miniPrice && housePrice <= maxPrice) {
          return house.country === country && house.type === property;
        }
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= miniPrice && housePrice <= maxPrice) {
          return house.type === property
        }
      }
    })

    setTimeout(() => {
      if (newHouses.length < 1) {
        setHouses([])
      } else {
        setHouses(newHouses)
      }
      setLoading(false)
    }, 1000)
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries, 
        property,
        setProperty,
        properties,
        setProperties, 
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
