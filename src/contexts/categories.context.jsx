import React, {createContext, useState, useEffect} from 'react';
import { addCollectionAndDocs, getCategoriesAndDocs } from '../utilities/firebase/firebase.js';
//import SHOP_DATA from '../data/shop-data.js' //we use it once to send data to db

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

  /*   useEffect(() => {  //we ran it once to add our collection to database
        addCollectionAndDocs('categories', SHOP_DATA);
    }, []) */

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocs();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    const value = {categoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children} </CategoriesContext.Provider>
    )
}