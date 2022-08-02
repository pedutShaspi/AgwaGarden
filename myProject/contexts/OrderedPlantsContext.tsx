import React, { useState, useContext } from 'react'

export const Context = React.createContext({})

export const OrderedPlantsProvider = ({ children }) => {
    const [orderedPlants, setOrderedPlants] = useState([])

    return (
        <Context.Provider
            value={{
                orderedPlants,
                setOrderedPlants
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useOrderedPlantsContext = () => useContext(Context)!